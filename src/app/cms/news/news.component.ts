import { Component, Input, OnInit, OnChanges, NgZone } from '@angular/core';
import { CustomersService } from '../customers.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [CustomersService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(+100%)'}),
        animate(500)
      ]),
      transition('*=> void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class NewsComponent implements OnInit, OnChanges {
  @Input() featured;
  public int: number;
  public view;

  constructor(private zone: NgZone) {}

  ngOnInit() {

    const featured = this.featured;
    const int = 0;
    this.view = featured[0];
    // do {
    //   setInterval(()=> {
    //     this.view = featured[int -1];;
    //   }, 4000);
    //   int ++;
    // } while (int < featured.length);

    // this.view.subscribe(() => {
    //   this.zone.run(() => {
    //     console.log('enabled time travel');
    //   });
    // });
  }

  ngOnChanges(view) {
    console.log('change detection happened');
  }
}


