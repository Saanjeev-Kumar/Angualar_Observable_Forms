import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';
import { ChildComponent } from './components/child/child.component';
import { Content3Component } from './components/content3/content3.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes:Routes = [
  {
    path:'content1',component:Content1Component
  },
  {
    path:'content2',component:Content2Component,
    children: [
      {
        path:'child',component:ChildComponent
      }
    ]
  },
  {
    path:'content3',component:Content3Component,
    children: [
      {
        path:':user',component:ProfileComponent
      }
    ]
  }

];
// {In case u forget to give the routing Module yes while creating angular}
// @NgModule({ // Created the Routing Module with cmd : ng generate module app-routing --module app --flat           
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
