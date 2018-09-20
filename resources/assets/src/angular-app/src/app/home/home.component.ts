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

}
