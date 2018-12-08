import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidator } from '../shared/validation';
import { DropDowns } from '../shared/drops';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  doctorForm: FormGroup;
  id:string = '';
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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDoctor(this.route.snapshot.params['id']);
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
        'province': [null, Validators.required],
        'town': [null, Validators.required],
        'postal': [null, Validators.required]
      }),
      'comments': [null]
    });
  }

  getDoctor(id) {
  this.api.getDoctor(id).subscribe(data => {
      this.id = data._id;
      this.doctorForm.setValue({
        name: {
          first: data.name.first,
          middle: data.name.middle,
          last: data.name.last
        },
        contact: {
          work: data.contact.work,
          email: data.contact.email
        },
        address: {
          line1: data.address.line1,
          line2: data.address.line2,
          country: data.address.country,
          province: data.address.province,
          town: data.address.town,
          postal: data.address.postal
        },
        comments: data.comments
      });
    });
  }

  onFormSubmit(form:NgForm) {
    console.log(this.id);
    this.api.updateDoctor(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/doctor-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }

  doctorDetails() {
    this.router.navigate(['/doctor-details', this.id]);
  }

}
