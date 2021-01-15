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
  @Input()
  model!: Model | undefined;
  @Output()
  modelChange: EventEmitter<Model> = new EventEmitter<Model>();
  @Output()
  editChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  name: string | undefined;
  props: Model[] | undefined;
  isEdit = false;


  constructor(private gs: GlobalService) { }

  ngOnInit(): void {
    this.isNew.subscribe(event => {
      console.log('New item requested from boolean: ', event);
      this.isEdit ||= event;
    });
  }

  save(): void {

    if (this.name !== undefined) {
      this.modelChange.emit({id: Guid.create(), name: this.name, properties: []});
      this.isEdit = false;
      this.name = undefined;
    }

  }

}
