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

  // pic1 = 'http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG';

  // picList =['http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG',
  //           'http://www.preachinginparadise.com/media/img/hike10-8-2018.JPG',
  //           'http://www.preachinginparadise.com/media/img/patriciaPresent9-17-018.JPG',
  //           'http://www.preachinginparadise.com/media/img/fafaru9-10-2018.jpg',
  //           'http://www.preachinginparadise.com/media/img/pirae7-23-2018.JPG',
  //           'http://www.preachinginparadise.com/media/img/makemoEnd7-9-2018.JPG',
  //           'http://www.preachinginparadise.com/media/img/makemoBellyButton7-9-2018.JPG',
  //           'http://www.preachinginparadise.com/media/img/lovely7-2-2018.JPG'
  // ]

  // paraList = [
  //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar fermentum consequat. Donec fringilla elit tristique, vulputate sapien pulvinar, placerat urna.',
  //             'Nulla dictum pellentesque congue. Proin laoreet leo at velit vehicula, et aliquet ipsum cursus. Morbi fringilla ultricies tempus. In congue iaculis elit, ac placerat lectus pellentesque ut.',
  //             'Praesent pretium dui eget ultrices tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere tellus vitae porta faucibus.',
  //             '<img src = "http://www.preachinginparadise.com/media/img/lovely7-2-2018.JPG"/>'
  // ]

  // picList = ['1234',
  //            '4567',
  //           '789']

  // posts:[
  //   post:{
  //     allData[
  //       data{}
  //       data{}
  //       data{}
  //     ]
  //   }

  // ]

  posts = [
    {title:'Test Post 1',
    date:'12/12/2014',
    post:[
      {allData:[
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG'},
          {para:[
            {p:'There is so much going on in the world.'},
            {p:'I cannot possibly handle what is going on.'},
            {p:'Will you help?'}
          ]}
        ]},
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/hike10-8-2018.JPG'},
          {para:[
            {p:'I can\' believe that we are going to the ocean!.'},
            {p:'It is like there is nothing in the world that can exist but this.'},
            {p:'Can it be done in such a way where I can live like this forever?'},
            {p:'\'Cause I don\'t think that it is possible for it to live for that long'}
          ]}
        ]},
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/patriciaPresent9-17-018.JPG'},
          {para:[
            {p:'Do you like this Pineapple?'},
            {p:'I like it.'},
            {p:'Want to share?'}
          ]}
        ]}
      ]}
    ]
    },
    {title:'Test Post 2',
    date:'11/11/7896',
    post:[
      {allData:[
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/clouds10-8-2018.JPG'},
          {p:'There is so much going on in the world.'},
          {p:'I cannot possibly handle what is going on.'},
          {p:'Will you help?'}
        ]},
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/hike10-8-2018.JPG'},
          {p:'I can\' believe that we are going to the ocean!.'},
          {p:'It is like there is nothing in the world that can exist but this.'},
          {p:'Can it be done in such a way where I can live like this forever?'},
          {p:'\'Cause I don\'t think that it is possible for it to live for that long'}
        ]},
        {data:[
          {img:'http://www.preachinginparadise.com/media/img/patriciaPresent9-17-018.JPG'},
          {p:'Do you like this Pineapple?'},
          {p:'I like it.'},
          {p:'Want to share?'}
        ]}
      ]}
    ]
    },
   ];

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
