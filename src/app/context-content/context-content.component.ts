import { Component, OnInit } from '@angular/core';
import { Context } from '../context';

@Component({
  selector: 'app-context-content',
  templateUrl: './context-content.component.html',
  styleUrls: ['./context-content.component.scss']
})
export class ContextContentComponent implements OnInit {

  constructor() { }
  contexts: Context[] =[];
  ngOnInit(): void {
  }

}
