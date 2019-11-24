import { Component } from '@angular/core';
import {Post} from "./models/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';

  listPosts:Post[] = [
    new Post("today news", "lorem ipsum dolor set amet, lorem ipsum dolor set amet, lorem ipsum dolor set amet"),
    new Post("healthy habits", "lorem ipsum dolor set amet, lorem ipsum dolor set amet, lorem ipsum dolor set amet"),
    new Post("best online store", "lorem ipsum dolor set amet, lorem ipsum dolor set amet"),
    new Post("gaming world", "lorem ipsum dolor set amet, lorem ipsum dolor set amet"),
    new Post("sports news", "lorem ipsum dolor set amet,lorem ipsum dolor set amet lorem ipsum dolor set amet, lorem ipsum dolor set amet")
  ];
}
