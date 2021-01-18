import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { CmsComponent } from '../cms.component';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss'],
  providers: [CustomersService]
})
export class CatagoriesComponent implements OnInit  {
  @Input() catagories;
  public customers: CustomersService;
  public selectedCatagory: string;
  selectCatagory: string;
  constructor(customers: CustomersService) {}
  ngOnInit() {
    const catagories = this.catagories;
  }
}
