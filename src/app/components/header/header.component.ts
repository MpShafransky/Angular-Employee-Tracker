import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Employee Tracker';
  showAddEmployee: boolean | undefined;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddEmployee = value));
   }

  ngOnInit(): void {}

  toggleAddEmployee() {
    this.uiService.toggleAddEmployee();
  }

}
