import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  @Input() employee!: Employee
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(employee: any) {
    console.log(employee);
  }

}
