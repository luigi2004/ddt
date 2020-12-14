import { NgModule } from '@angular/core';
import { Routes,Route, RouterModule } from '@angular/router';
import { ContextContentComponent } from './context-content/context-content.component';
import { ModelContentComponent } from './model-content/model-content.component';
import { ServiceContentComponent } from './service-content/service-content.component';
import { tools } from './tools/registered.tool';


const routes: Routes = 
[
  {path: 'model', component: ModelContentComponent},
  {path: 'service', component: ServiceContentComponent},
  {path: 'context', component: ContextContentComponent},
  {path: '', redirectTo: '/context', pathMatch: 'full'}
];



// const activeTool: Tool;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


