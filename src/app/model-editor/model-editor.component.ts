import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-editor',
  templateUrl: './model-editor.component.html',
  styleUrls: ['./model-editor.component.scss']
})
export class ModelEditorComponent implements OnInit {

  @Input()
  model: Model | undefined;
  @Input()
  edit: boolean = false;
  @Output()
  modelChange: EventEmitter<Model> = new EventEmitter<Model>();
  @Output()
  editChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  name: string = "";
  props: Model[] = [];

  

  constructor(private gs:GlobalService) { }

  ngOnInit(): void {
  }

  save(): void {
    if(this.model === undefined){
      console.log("adding new model with name:", this.name);
      this.model = { name: this.name, properties: [] } as Model;
    }
    console.log("Model info:", this.model);
    this.modelChange.emit(this.model);
    this.edit = false;
  }

  getName(): string {
    if (this.model) {
      return this.model.name;
    }
    return 'Select Model';
  }

}
