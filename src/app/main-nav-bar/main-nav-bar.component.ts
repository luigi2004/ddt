import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GlobalService } from '../global-service.service'

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

  toolName: Observable<string> = this.gs.getSelectedTool();

  tools:Array<Modes> = [
    { name: "Model",path: "/model"},
    { name: "Service", path: "/service"},
    { name: "Context", path: "/context"}
  ]

  @Input('title') title: string | undefined;

  constructor(private breakpointObserver: BreakpointObserver, private gs:GlobalService) {}
  
  toolChangeEvent(name:string) {
    this.gs.setSelectedTool(name);
  }

  isTool(name: string): boolean {
    let s;
    this.toolName.subscribe(data=>s = data);
    return s === name;
  }

  pathFromName(name: string): string {
    return "/" + name;
  }
}

interface Modes {
  name: string;
  path: string;
}
