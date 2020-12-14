import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-editor',
  templateUrl: './model-editor.component.html',
  styleUrls: ['./model-editor.component.scss']
})
export class ModelEditorComponent implements OnInit {

  isEdit: boolean = this.gs.getSelectedModel() != null;
  model: Model = { name: "", properties:[] }
  constructor(private gs:GlobalService) { }

  ngOnInit(): void {
  }

}
