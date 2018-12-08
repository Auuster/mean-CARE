import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: any;
  displayedColumns = ['first_name', 'middle_name', 'last_name'];
  dataSource = new DoctorDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDoctors()
      .subscribe(res => {
        console.log(res);
        this.doctors = res;
      }, err => {
        console.log(err);
    });
  }
}

export class DoctorDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getDoctors();
  }

  disconnect() {

  }
}