import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { fadeInAnimation } from '../animations/index';

@Component({
  selector: 'app-home',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

    title.setTitle('My Spiffy Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'Coursetro.com'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])

  }

  ngOnInit() {
  }

}
