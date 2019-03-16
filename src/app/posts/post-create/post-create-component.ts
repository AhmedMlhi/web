import { Post } from './post.model';
import {Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({

    selector: 'app-post-create',
    templateUrl: './post-create-component.html',
    styleUrls: ['./post-create-component.css']
})





export class PostCreateComponent {
    newPost = '';
    enteredTitle = '';
    enteredContent = '';
    @Output() OnPostCreated = new EventEmitter<Post>();

    onAddPost(form: NgForm) {
      if ( form.invalid) {

        return;
      }

      // tslint:disable-next-line:one-variable-per-declaration
      const post = {


        title: form.value.title,
        content: form.value.content
        };

      this.OnPostCreated.emit(post);
     }

}
