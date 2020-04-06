import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Actor} from './actor-interface';
import { actors } from './actors';
import { Comment} from './actor-interface';
@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {
actors: Actor[];
  constructor() { 
    this.actors = actors;
  }
  getActors(): Observable<Actor[]> {
    return of(this.actors);
  }
  getActor(id:number): Observable <Actor> {
    return of(this.actors.find( actor => actor.id ===id));
  }
  
  addCommentToActor(id: number, comment: Comment) {
    this.actors.forEach( actor => {
      if(actor.id === id){
        actor.comments.push(comment);
      }
    });
  }
}
