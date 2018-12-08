import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  patients: any;
  displayedColumns = ['first_name', 'middle_name', 'last_name'];
  dataSource = new PatientDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPatients()
      .subscribe(res => {
        console.log(res);
        this.patients = res;
      }, err => {
        console.log(err);
    });
  }
}
  
export class PatientDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getPatients();
  }

  disconnect() {

  }
}