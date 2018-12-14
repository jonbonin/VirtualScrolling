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

  paraList = [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar fermentum consequat. Donec fringilla elit tristique, vulputate sapien pulvinar, placerat urna.',
              'Nulla dictum pellentesque congue. Proin laoreet leo at velit vehicula, et aliquet ipsum cursus. Morbi fringilla ultricies tempus. In congue iaculis elit, ac placerat lectus pellentesque ut.',
              'Praesent pretium dui eget ultrices tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere tellus vitae porta faucibus.',
              '<img src = "http://www.preachinginparadise.com/media/img/lovely7-2-2018.JPG"/>'
  ]

  // picList = ['1234',
  //            '4567',
  //           '789']

}


// import { Component } from '@angular/core';
// import * as faker from 'faker';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'Ng7InfiniteVirtualScroll';
//   dummydata;
//   constructor() { 
//     this.dummydata = Array(10000)
//       .fill(1)
//       .map(_ => {
//         return {
//           name: faker.name.findName(),
//           company:faker.company.companyName(),
//           avatar:faker.image.avatar()
//         };
//       });
//   }
// }
