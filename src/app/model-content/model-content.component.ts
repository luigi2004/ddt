import { Component, OnInit } from '@angular/core';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModelContentComponent implements OnInit {

  constructor() { }

  models!: Model[];
  selectedModel:Model |  undefined;
  isEditing!: boolean;

  ngOnInit(): void {
    this.models = [];
  }

  onModelSelected(event: Model) {
    console.log("The event: ", event);
    this.selectedModel = event;
  }

  onModelSave(event: Model){
    console.log("Models: ",this.models);
    this.models.push(event);
  }

  onEdit(event: boolean){
    this.isEditing = event;
  }

  onNewModel(event: Model) {
    this.models.push(event);
  }

  

}
