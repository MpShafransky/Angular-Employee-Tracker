import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
    id: string | undefined;
    jobTitleName: string | undefined;
    firstName: string | undefined; 
    lastName: string | undefined;
    preferredFullName: string | undefined;
    employeeCode: string | undefined;
    region: string | undefined;
    phoneNumber: string | undefined;
    emailAddress: string | undefined;
    showAddEmployee: boolean | undefined;
    subscription: Subscription | undefined;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddEmployee = value));
  }

  
 ngOnInit(): void {
  }
  // readonly newEmployee = {
  //   id: this.id,
  //   jobTitleName: this.jobTitleName,
  //   firstName: this.firstName,
  //   lastName: this.lastName,
  //   preferredFullName: this.preferredFullName,
  //   employeeCode: this.employeeCode,
  //   phoneNumber: this.phoneNumber,
  //   emailAddress: this.emailAddress
  // };

  


  onSubmit() {
    if (!this.id) {
      alert('Please add an Employee!');
      return;
    }
  }

  

}

// Thows error over declaration, out of my realm of knowledge. Moved onto next step and will backtrack to avoid too much time on one component//