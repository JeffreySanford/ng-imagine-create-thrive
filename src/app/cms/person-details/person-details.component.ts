import { Component, Input, OnInit, OnChanges, ChangeDetectorRef  } from '@angular/core';
import { CmsComponent } from '../cms.component';
import { EntitiesComponent } from '../entities/entities.component';
import { Person } from '../person.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  providers: [CustomersService],
  animations: [
    trigger('flyInOut', [
      state('person', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(+100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ]),
      transition('void => *', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class PersonDetailsComponent implements OnInit {
  @Input() person;
  // @TODO Use a tuplet to feed the view
  // public tuplet: object;
  public customers: CustomersService;

  constructor(customers: CustomersService) {}

  ngOnInit() {
    const person = this.person;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    const person_view_template = document.querySelectorAll('#person_view.card');
    const person_view = person_view_template[0];

    if (person_view !== undefined) {
      // person_view.classList.remove('zoom-in');
      person_view.setAttribute('class', 'card zoom-in');
    }
  }
}
