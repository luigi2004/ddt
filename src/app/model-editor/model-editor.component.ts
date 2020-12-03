import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-model-editor',
  templateUrl: './model-editor.component.html',
  styleUrls: ['./model-editor.component.scss']
})
export class ModelEditorComponent implements OnInit {

  isEdit: boolean = false;
  model: Model = { name: "", properties:[] }
  constructor() { }

  ngOnInit(): void {
  }

}
