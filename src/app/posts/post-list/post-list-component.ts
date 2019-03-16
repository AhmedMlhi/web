import {Component, Input} from '@angular/core';
import {Post} from 'c:/Users/Lenovo Thinkpad/Documents/Dev/Angular/angular-app/src/app/posts/post-create/post.model';



@Component({

    selector: 'app-post-list',
    templateUrl: './post-list-component.html',
    styleUrls: ['./post-list-component.css']



})
export class PostListComponent {





 /* public posts = [
    {title: 'first one', content: 'chah chah'},
    {title: 'second one', content: 'chah chah'},
    {title: 'third one', content: 'chah chah'},
    {title: 'fouryth one', content: 'chah chah'},



];*/

public: any; @Input() posts: Post[] = [];


}
