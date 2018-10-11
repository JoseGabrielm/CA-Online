import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  columnNum = 2;

  constructor(media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // alert(change.mqAlias);  
        console.log(change.mqAlias);
        if(change.mqAlias == 'xs'){
          this.columnNum = 1;
        }
        else if(change.mqAlias == 'sm'){
          this.columnNum = 1;
        }
        else{
          this.columnNum = 2;
        }
      });
  }
  ngOnInit() {
  }
  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234567'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });
}
