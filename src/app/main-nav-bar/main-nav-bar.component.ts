import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GlobalService } from '../global-service.service'
import {  Router } from '@angular/router';
import { tools } from '../tools/registered.tool';
import { Tool } from '../tools/tool';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toolName: string = this.gs.getSelectedTool();

  @Input('title') title: string | undefined;

  constructor(private breakpointObserver: BreakpointObserver, private gs:GlobalService, private router: Router) {}
  
  toolChangeEvent(tool:Tool) {
    this.gs.setSelectedTool(tool.name);
    this.toolName =tool.name;
    this.router.navigate([tool.name.toLowerCase()]);
  }

  isTool(name: string): boolean {
    return this.toolName === name;
  }

  pathFromName(name: string): string {
    return "/" + name;
  }

  getTools() {
    return tools.filter((tool)=> !this.isTool(tool.name));
  }
}
