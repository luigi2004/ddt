import { Component, OnInit } from '@angular/core';
import { ContextDef } from '../tools/context.tool';

@Component({
  selector: 'app-context-content',
  templateUrl: './context-content.component.html',
  styleUrls: ['./context-content.component.scss']
})
export class ContextContentComponent implements OnInit {

  constructor() { }
  contexts: ContextDef[] =[];
  ngOnInit(): void {
  }

}
