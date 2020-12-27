import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-tree',
  templateUrl: './model-tree.component.html',
  styleUrls: ['./model-tree.component.scss']
})
export class ModelTreeComponent implements OnInit {
  private _transformer = (model: Model, level: number): Node => {
    return {
      expandable: !!model.properties && model.properties.length > 0,
      name: model.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<Node>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.properties);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    
  }

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  hasChild = (_: number, node: Node) => node.expandable;

  @Input()
  data: Model[] = [];
  @Output()
  selectedModel: EventEmitter<Model> = new EventEmitter<Model>();
  @Output()
  newModelRequest: EventEmitter<boolean> = new EventEmitter<boolean>();

  newModel() {
    console.log("Adding new");
    this.newModelRequest.emit(true);
  }

}

interface Node {
  expandable: boolean;
  name: string;
  level: number;
}
