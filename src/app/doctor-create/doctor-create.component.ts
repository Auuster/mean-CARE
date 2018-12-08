import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidator } from '../shared/validation';
import { DropDowns } from '../shared/drops';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  doctorForm: FormGroup;
  first:string='';
  middle:string='';
  last:string='';
  work:string='';
  email:string='';
  line1:string='';
  line2:string='';
  country:string='';
  province:string='';
  town:string='';
  postal:string='';
  comments:string='';
  provinces:string[] = DropDowns.getProvinces();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    console.log(form);
      this.api.postDoctor(form)
        .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/doctor-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

  ngOnInit() {
    this.doctorForm = this.formBuilder.group({
      'name': this.formBuilder.group({
        'first': [null, Validators.required],
        'middle': [null],
        'last': [null, Validators.required]
      }),
      'contact': this.formBuilder.group({
        work: [null, CustomValidator.phoneValidator],
        email: [null, [Validators.required, Validators.email]]
      }),
      'address': this.formBuilder.group({
        'line1': [null, Validators.required],
        'line2': [null],
        'country': [null, Validators.required],
        'province': ['ON', Validators.required],
        'town': [null, Validators.required],
        'postal': [null, Validators.required]
      }),
      'comments': [null]
    });

  }

}