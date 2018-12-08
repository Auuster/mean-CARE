import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getPatientDetails(id) {
    this.api.getPatient(id)
      .subscribe(data => {
        console.log(data);
        this.patient = data;
      });
  }  

  ngOnInit() {
    this.getPatientDetails(this.route.snapshot.params['id']);
  }

  deletePatient(id) {
    this.api.deletePatient(id)
      .subscribe(res => {
          this.router.navigate(['/patients']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
