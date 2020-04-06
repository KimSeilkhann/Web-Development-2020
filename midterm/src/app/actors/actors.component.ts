import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActorServiceService} from '../actor-service.service';
import { Actor } from '../actor-interface';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors : Actor[] = [];
  constructor( private router: Router, private actorService: ActorServiceService) { }

  ngOnInit(){
    this.actorService.getActors().subscribe(actors => {
      this.actors = actors;
    });
  }

}
