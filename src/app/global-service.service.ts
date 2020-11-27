import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, scheduled, Subject } from 'rxjs';
import { Context } from './context';
import { Model } from './model';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor() {  }

  private selectedToolName: BehaviorSubject<string> = new BehaviorSubject("Model");
  private selectedModel: Model = { name: "", properties: []};
  private selectedContext: Context = {name:""};
  private selectedService: Service = {};
  
  getSelectedTool(): Observable<string> {
    return this.selectedToolName.asObservable();
  }

  setSelectedTool(name:string) {
    this.selectedToolName.next(name);
  }
}
