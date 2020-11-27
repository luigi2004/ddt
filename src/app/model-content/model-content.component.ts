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
  

  ngOnInit(): void {
    this.models = [];
  }

}
