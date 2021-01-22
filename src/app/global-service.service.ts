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


  constructor(private route: Router) {  }

  private selectedTool: Tool = tools.filter(tool => tool.name === 'Model')[0];


  getSelectedTool(): string {

    return this.selectedTool.name;
  }

  setSelectedTool(name: string): void {
    this.selectedTool = tools.filter(tool => tool.name === name)[0];
  }

  getActive(): Tool{
    return this.selectedTool;
  }

  setActive(active: any): void {
    this.selectedTool = active;
  }

  getData(): any[] {
    console.log('Data: ', this.selectedTool.data);

    return this.selectedTool.data;
  }

  add(item: any): void {
    this.selectedTool.data.push(item);
  }

}
