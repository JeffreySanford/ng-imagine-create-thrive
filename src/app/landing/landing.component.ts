import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(500)
    ]),
    transition('* => void', [
      animate(500, style({transform: 'translateX(100%)'}))
    ]),
    transition('* => void', [
      animate(500, style({transform: 'translateX(100%)'}))
    ])
  ])]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
