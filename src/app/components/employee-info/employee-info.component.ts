import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  @Input() employee!: Employee
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(employee: any) {
    this.onDeleteEmployee.emit(employee);
  }

}
