import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable } from 'rxjs';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';

function transformer(model: Model, level: number): Node {
  return {
    expandable: !!model.properties && model.properties.length > 0,
    name: model.name,
    level,
  };
}
@Component({
  selector: 'app-model-tree',
  templateUrl: './model-tree.component.html',
  styleUrls: ['./model-tree.component.scss']
})
export class ModelTreeComponent implements OnInit {

  @Output()
  selectedModel: EventEmitter<Model> = new EventEmitter<Model>();

  @Output()
  newModelRequest: EventEmitter<boolean> = new EventEmitter<boolean>();

  treeControl = new FlatTreeControl<Node>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(transformer, node => node.level, node => node.expandable, node => node.properties);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private gs: GlobalService) {

  }

  ngOnInit(): void {
    this.gs.getData().subscribe(models => this.dataSource.data = models);
  }

  hasChild = (_: number, node: Node) => node.expandable;



  newModel(): void {
    console.log('Adding new');
    this.newModelRequest.emit(true);
  }

}

interface Node {
  expandable: boolean;
  name: string;
  level: number;
}
