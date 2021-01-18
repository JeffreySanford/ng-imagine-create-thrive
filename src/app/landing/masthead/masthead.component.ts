import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})

export class MastheadComponent {
  scrollToSection() {
    document.getElementById('services').scrollIntoView();
  }
}

