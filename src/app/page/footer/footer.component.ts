import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public navIsFixed = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {}

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}
