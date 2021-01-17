import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';


@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModelContentComponent implements OnInit {

  isEditing!: boolean;
  isNew = new Subject<boolean>();
  models = new Subject<Model[]>();
  selected: Model | undefined;

  constructor(private gs: GlobalService) { }

  ngOnInit(): void {
    this.models.next(this.gs.getData());
  }

  onModelSelected(event: Model): void {
    this.gs.getActive().active.next(event);
    console.log('Selected: ', event);

  }

  onModelSave(event: Model): void {
    console.log('Saving Model: ', event);

    this.gs.add(event);
    if (this.isNew) {
      this.models.next(this.gs.getData());
      return;
    }
  }

  onNewModel(event: boolean): void {
    this.isNew.next(event);
  }

}
