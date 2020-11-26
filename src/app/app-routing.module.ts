import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextContentComponent } from './context-content/context-content.component';
import { ModelContentComponent } from './model-content/model-content.component';
import { ServiceContentComponent } from './service-content/service-content.component';

const routes: Routes = [
  {path: 'model', component: ModelContentComponent},
  {path: 'service', component: ServiceContentComponent},
  {path: 'context', component: ContextContentComponent},
  {path: '', redirectTo: '/model', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
