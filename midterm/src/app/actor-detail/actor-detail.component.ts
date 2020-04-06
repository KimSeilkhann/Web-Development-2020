import { Component, OnInit } from '@angular/core';
import { Actor} from '../actor-interface';
import { ActorServiceService} from '../actor-service.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
actor: Actor;
newComment = "";
  constructor(
    private route: ActivatedRoute,
    private actorService: ActorServiceService,
    private router: Router,
    private location: Location
    
  ) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(id) {
      this.actorService.getActor(id).subscribe( actor => {
        this.actor = actor;
      });
    }
  }

  addNewComment(){
    if(this.newComment){
      this.actorService.addCommentToActor(this.actor.id, {
        text: this.newComment
      });
      this.newComment = "";
    }
  }

  goBack(){
    this.location.back();
  }
}
