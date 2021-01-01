import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Model } from '../tools/model.tool';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModelContentComponent implements OnInit {

  isEditing!: boolean;
  isNew = false;

  constructor(private gs: GlobalService) { }

  ngOnInit(): void {
  }

  onModelSelected(event: Model) {
    this.gs.setActive(event);
    console.log("Selected: ", event);

  }

  onModelSave(event: Model){
    
  }

  onEdit(event: boolean){
    this.isEditing = event;
    console.log("IsEditing:",this.isEditing);
  }

  onNewModel(event: boolean) {
    this.isNew = true;
  }

  

}
