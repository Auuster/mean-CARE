import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidator } from '../shared/validation';
import { DropDowns } from '../shared/drops';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patientForm: FormGroup;
  id:string = '';
  first:string='';
  middle:string='';
  last:string='';
  title:string='';
  sex:string='';
  birthdate:string='';
  home:string='';
  mobile:string='';
  work:string='';
  email:string='';
  line1:string='';
  line2:string='';
  country:string='';
  province:string='';
  town:string='';
  postal:string='';
  comments:string='';
  sexes:string[] = DropDowns.getSexes();
  provinces:string[] = DropDowns.getProvinces();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPatient(this.route.snapshot.params['id']);
    this.patientForm = this.formBuilder.group({
      'name': this.formBuilder.group({
        'first': [null, Validators.required],
        'middle': [null],
        'last': [null, Validators.required]
        }),
      'title': [null, Validators.required],
      'sex': [null, Validators.required],
      'birthdate': [null, Validators.required],
      'contact': this.formBuilder.group({
        home: [null, CustomValidator.phoneValidator],
        mobile: [null, CustomValidator.phoneValidator],
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

  getPatient(id) {
  this.api.getPatient(id).subscribe(data => {
      this.id = data._id;
      this.patientForm.setValue({
        name: {
          first: data.name.first,
          middle: data.name.middle,
          last: data.name.last
        },
        title: data.title,
        sex: data.sex,
        birthdate: data.birthdate,
        contact: {
          home: data.contact.home,
          mobile: data.contact.mobile,
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
    this.api.updatePatient(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/patient-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }

  patientDetails() {
    this.router.navigate(['/patient-details', this.id]);
  }

}
