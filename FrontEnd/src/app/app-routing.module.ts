import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserListComponent } from './user-list/user-list.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
