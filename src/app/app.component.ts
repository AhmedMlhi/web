import { Component } from '@angular/core';
import {Post} from './posts/post-create/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  storedPosts: Post[] = [];

  OnPostAdded(post) {
  this.storedPosts.push(post);


  }



}
