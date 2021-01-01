import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-editor',
  templateUrl: './model-editor.component.html',
  styleUrls: ['./model-editor.component.scss']
})
export class ModelEditorComponent implements OnInit {


  isEdit = false;
  @Output()
  modelChange: EventEmitter<Model> = new EventEmitter<Model>();
  @Output()
  editChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  name: string | undefined;
  props: Model[] | undefined;
  

  constructor(private gs: GlobalService) { }

  ngOnInit(): void {
    const model = this.gs.getActive();
    this.name = model?.name;
    this.props = model?.properties;

  }

  save(): void {
    if(this.name !== undefined)
      this.modelChange.emit({name: this.name, properties:[]});
  }

}
