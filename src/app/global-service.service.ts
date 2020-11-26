import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, scheduled, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor() {  }

  selectedToolName: BehaviorSubject<string> = new BehaviorSubject("Model");

  getSelectedTool(): Observable<string> {
    return this.selectedToolName.asObservable();
  }

  setSelectedTool(name:string) {
    this.selectedToolName.next(name);
  }
}
