import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../models/Post";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input()
  postItem:Post;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.postItem.loveIts++;
  }

  DontLoveIt() {
    this.postItem.loveIts--;
  }
}
