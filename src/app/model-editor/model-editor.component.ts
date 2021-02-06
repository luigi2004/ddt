import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, Subject } from 'rxjs';
import { GlobalService } from '../global-service.service';
import { Model, ModelTool } from '../tools/model.tool';



@Component({
  selector: 'app-model-editor',
  templateUrl: './model-editor.component.html',
  styleUrls: ['./model-editor.component.scss']
})
export class ModelEditorComponent implements OnInit {

  @Input()
  isNew!: Observable<boolean>;

  model!: Model;

  @Output()
  modelChange: EventEmitter<Model> = new EventEmitter<Model>();
  @Output()
  editChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  name: string | undefined;
  props: Model[] = [];
  isEdit = false;

  constructor(private gs: GlobalService) { }

  ngOnInit(): void {
    this.isNew.subscribe(event => {
      console.log('New item requested from boolean: ', event);
      this.isEdit ||= event;
    });
    this.gs.getActive().active.subscribe(m => {
      this.model = m;
      this.name = m.name;
      this.props = m.properties;
    });
  }

  addProperty(): void {

  }

  save(): void {
    if (this.name !== undefined) {
      this.model.name = this.name;
      this.model.properties = this.props;
      this.modelChange.emit(this.model);
      this.isEdit = false;
      this.name = undefined;
    }
  }
}
