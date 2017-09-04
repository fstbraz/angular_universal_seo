import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { fadeInAnimation } from '../animations/index';

@Component({
  selector: 'app-notfound',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('Not found');

    meta.addTags([ 
      {
        name: 'author', content: 'Not found'
      },
      {
        name: 'keywords', content: 'Not found'
      },
      {
        name: 'description', content: 'Not found'
      },
    ])

  }

  ngOnInit() {
  }

}
