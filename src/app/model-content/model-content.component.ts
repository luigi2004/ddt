import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModelContentComponent implements OnInit {

  constructor() { }

  models!: Model[];
  selectedModel!:Model;

  ngOnInit(): void {
    this.models = [];
  }

  newModel() {
    let model = {name: "Testing New model",properties: []}
    // this.models.push(model);
    this.selectedModel = model;
    console.log("new model named: ",model.name);
  }

}
