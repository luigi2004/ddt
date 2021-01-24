import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
    this.models.next(this.gs.getData() as Model[]);
  }

  onModelSelected(event: Model): void {
    this.gs.getActive().active.next(event);
    console.log('Selected: ', event);
  }

  onModelSave(event: Model): void {
    console.log('Saving Model: ', event);
    const data = this.gs.getData();

    if (data.includes(event)) {
      this.gs.getActive().data = data.map(i => (i.id.equals(event.id) ? event : i));
    } else {
      this.gs.add(event);
    }

    this.models.next(this.gs.getData() as Model[]);
    console.log('Saved: ', data);
  }

  onNewModel(event: boolean): void {
    this.isNew.next(event);
  }

}
