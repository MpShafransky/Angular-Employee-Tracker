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
    id!: string;
    jobTitleName!: string;
    firstName!: string; 
    lastName!: string;
    preferredFullName!: string;
    employeeCode!: string;
    region!: string;
    phoneNumber!: string;
    emailAddress!: string;
    showAddEmployee?: boolean;
    subscription: Subscription;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddEmployee = value));
  }

  
 ngOnInit(): void {
  }
 

  


  onSubmit() {
    if (!this.id) {
      alert('Please add an Employee!');
      return;
    }

  const newEmployee = {
    
    id: this.id,
    jobTitleName: this.jobTitleName,
    firstName: this.firstName,
    lastName: this.lastName,
    preferredFullName: this.preferredFullName,
    employeeCode: this.employeeCode,
    region: this.region,
    phoneNumber: this.phoneNumber,
    emailAddress: this.emailAddress,
  };

    this.onAddEmployee.emit(newEmployee);
  
    this.id = '';
    this.jobTitleName = '';
    this.firstName = '';
    this.lastName = '';
    this.preferredFullName = '';
    this.employeeCode = '';
    this.region = '';
    this.phoneNumber = '';
    this.emailAddress = '';

    }
  }

  



// Thows error over declaration, out of my realm of knowledge. Moved onto next step and will backtrack to avoid too much time on one component//