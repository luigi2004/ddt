import { Injectable } from '@angular/core';
import { tools } from './tools/registered.tool';
import { Model } from './tools/model.tool';
import { ContextDef } from './tools/context.tool';
import { ServiceDef } from './tools/service.tool';
import { Tool } from './tools/tool';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private route:Router) {  }
  
  private selectedTool: Tool = tools.filter(tool=>tool.name==="model")[0];
  private selectedModel: Model | undefined;
  private selectedContext: ContextDef | undefined;
  private selectedService: ServiceDef | undefined;
  
  getSelectedTool(): string {
    
    return this.selectedTool.name;
  }

  setSelectedTool(name:string) {
    this.selectedTool = tools.filter(tool=>tool.name===name)[0];
  }

  getSelectedModel() {
    if(this.selectedModel != undefined){
      return this.selectedModel;
    } else {
      return null;
    }
  }
}
