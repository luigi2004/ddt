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
  selectedModel!:Model;

  ngOnInit(): void {
    this.models = [];
  }

  

}
