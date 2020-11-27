import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Model } from '../model';

@Component({
  selector: 'app-model-tree',
  templateUrl: './model-tree.component.html',
  styleUrls: ['./model-tree.component.scss']
})
export class ModelTreeComponent implements OnInit {
  private _transformer = (node: Model, level: number): Node => {
    return {
      expandable: !!node.properties && node.properties.length > 0,
      name: node.name,
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

}

interface Node {
  expandable: boolean;
  name: string;
  level: number;
}
