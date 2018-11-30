import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css']
})
export class PicListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pic1 = 'http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG';
  pic2 = 'http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG';
  
}
