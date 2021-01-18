import { Component, Input, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { CmsComponent } from '../cms.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  providers: [CustomersService],
  animations: [
    trigger('flyInOut', [
      state('entities', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(-100%)'}))
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(-100%)'}))
      ])
    ]),
    // @TODO Animate each of the elements
    trigger('listAnimation', [
      state('entity', style({transform: 'translateX(0)'})),
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
    ]

    )
  ]
})

export class EntitiesComponent implements OnInit {
  @Input() entities;
  public customers: CustomersService;

  constructor(customers: CustomersService) {}

  ngOnInit() {
    const entities = this.entities;
    this.entities = entities;
  }

  ngOnChange(entities) {}
}
