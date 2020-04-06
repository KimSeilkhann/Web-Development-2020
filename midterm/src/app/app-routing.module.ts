import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent} from './actors/actors.component';
import { ActorDetailComponent} from './actor-detail/actor-detail.component'

const routes: Routes = [
  {path: '',
  redirectTo: '/actors',
  pathMatch: 'full'
  },
  {
    path: 'actors',
    component: ActorsComponent
  },
  {
    path: 'actors/:id',
    component: ActorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
