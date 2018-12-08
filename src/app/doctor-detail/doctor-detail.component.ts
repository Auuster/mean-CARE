import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  doctor = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getDoctorDetails(id) {
    this.api.getDoctor(id)
      .subscribe(data => {
        console.log(data);
        this.doctor = data;
      });
  }  

  ngOnInit() {
    this.getDoctorDetails(this.route.snapshot.params['id']);
  }

  deleteDoctor(id) {
    this.api.deleteDoctor(id)
      .subscribe(res => {
          this.router.navigate(['/doctors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}