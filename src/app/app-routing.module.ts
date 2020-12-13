import { NgModule } from '@angular/core';
import { Routes,Route, RouterModule } from '@angular/router';
import { ContextContentComponent } from './context-content/context-content.component';
import { ModelContentComponent } from './model-content/model-content.component';
import { ServiceContentComponent } from './service-content/service-content.component';

export interface Tool {
  route: Route;
  name:string;
}

const tools: Tool[] = [
  {name: 'model', route: {path: 'model', component: ModelContentComponent}},
  {name: 'service', route: {path: 'service', component: ServiceContentComponent}},
  {name: 'context', route: {path: 'context', component: ContextContentComponent}}
];

const routes: Routes = tools.map(tool=>tool.route).concat([
  {path: '', redirectTo: '/model', pathMatch: 'full'}
]);

// [
//   {path: 'model', component: ModelContentComponent},
//   {path: 'service', component: ServiceContentComponent},
//   {path: 'context', component: ContextContentComponent},
//   {path: '', redirectTo: '/context', pathMatch: 'full'}
// ];



// const activeTool: Tool;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


