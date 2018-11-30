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

  picList =['http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG',
            'http://www.preachinginparadise.com/media/img/hike10-8-2018.JPG',
            'http://www.preachinginparadise.com/media/img/patriciaPresent9-17-018.JPG',
            'http://www.preachinginparadise.com/media/img/fafaru9-10-2018.jpg',
            'http://www.preachinginparadise.com/media/img/pirae7-23-2018.JPG',
            'http://www.preachinginparadise.com/media/img/makemoEnd7-9-2018.JPG',
            'http://www.preachinginparadise.com/media/img/makemoBellyButton7-9-2018.JPG',
            'http://www.preachinginparadise.com/media/img/lovely7-2-2018.JPG'
  ]

}
