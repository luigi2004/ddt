import { Injectable } from '@angular/core';
import { tools } from './tools/registered.tool';
import { Model } from './tools/model.tool';
import { ContextDef } from './tools/context.tool';
import { ServiceDef } from './tools/service.tool';
import { Tool } from './tools/tool';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private route:Router) {  }

  private selectedTool: Tool = tools.filter(tool=>tool.name==="Model")[0];


  getSelectedTool(): string {

    return this.selectedTool.name;
  }

  setSelectedTool(name:string) {
    this.selectedTool = tools.filter(tool=>tool.name===name)[0];
  }

  getActive(){
    return this.selectedTool.active;
  }

  setActive(active: any){
    this.selectedTool.active = active;
  }

  getData(): Observable<any[]> {
    console.log('Data: ', this.selectedTool.data.);

    return this.selectedTool.data.asObservable();
  }

  add(item: any){
    this.selectedTool.data.next([item]);
  }

}
