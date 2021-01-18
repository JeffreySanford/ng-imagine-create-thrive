import { Component, Input, OnInit } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';

import { Person } from './person.model';
import { Entities } from './entities.model';

// import { CUSTOMERS } from './customers.model';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
  providers: [CustomersService]
})
export class CmsComponent implements OnInit {

  timed = false;

  public people: any;
  public catagories = [];
  public selected_catagory: string;
  public entities = [];
  public selected_person: string;
  public featured;
  public customers: CustomersService;
  public person: Person;
  public int;
  public view;

  constructor(customers: CustomersService) {
    const data = customers.getCustomers();

    for (const el of data) {
      if (el) {
        this.people = el;
      }
    }
  }

  ngOnInit() {
    const people = this.people;
    const catagories = this.getCatagoryKeys(people);
    const selected_catagory = this.catagories[0];
    this.selected_catagory = selected_catagory;

    const entities = this.people[selected_catagory];
    this.entities = entities;

    const person = entities[0];
    this.person = person;

    const featured = this.people[selected_catagory];
    this.featured = featured;
}
  ngOnChange(entities, featured, selected_catagory) {

  }

  getCatagoryKeys(people) {
    for (const key in people) {
      if (key) {
        this.catagories.push(key);
      }
    }
    return this.catagories;
  }

  onSelectCatagory($event) {
    const selected_catagory = $event.srcElement.firstChild.data;
    this.selected_catagory = selected_catagory;
    // console.log('catagory selected is: ' + selected_catagory);

    const entities = this.people[selected_catagory];
    this.entities = entities;
    // console.log('entities returned');
    // console.dir(entities);

    this.featured = this.people[selected_catagory];
    const featured = this.featured;
    this.person = this.people[selected_catagory][0];
    const current_people = this.entities;
    // const person = this.person;
  }

  onSelectPerson($event) {

    // This is the person selected from the array of people.  It trims
    // the white space from the card title.

    let person_selected = $event.srcElement.firstChild.data.trim();

    // Remove the active class
    let i = 0;

    for (i; i < this.entities.length; i++) {
      const currentActive = document.querySelectorAll('.card.marked');


      if (currentActive.length > 0) {
        currentActive[0].classList.remove('marked');
      }
    }

    // @Todo  There should be a better method for identifying the card, the
    // following lines determine where the user has clicked and identifies
    // the information contained in card title.

    if (person_selected === '' || person_selected === undefined) {
      person_selected = $event.srcElement.parentNode.children[1].children[0].firstChild.data.trim();
      console.log(person_selected);
      $event.srcElement.parentNode.setAttribute('class', 'card marked');
    } else {
      console.log(person_selected);
      $event.srcElement.parentNode.parentNode.setAttribute('class', 'card marked');
    }
    // @Todo  When the image is click, it will fail.  Create another if clause that
    // will account for this.  Test the border as well.


   // console.log('person selected is: ' + person_selected);

    const selected_catagory = this.selected_catagory;
    // console.log('catagory selected is: ' + this.selected_catagory);

    const entities = this.people[selected_catagory];
    // console.log('entities returned');
    // console.dir(entities);

    for (const person of entities) {
      const person_name = person.first_name + ' ' + person.last_name;
      // console.log(person_name);

      if (person_name === person_selected) {
        this.person = person;
        // const person_view = document.getElementById('person_view');
        // person_view.setAttribute('class', 'card marked');
      }
    }
  }

  // @ToDo Here will be the CRUD events

  public addEntity(person) {
    console.log('add event from service');
  }
  public updateEntity(person) {
    console.log(' update event');
  }
  public deleteEntity(person_id) {
    console.log('delete event');
    // this.data = this.data.filter(item => item !== data_item);
  }
  public groupEntity($event) {
    console.log('group event');
  }
}
