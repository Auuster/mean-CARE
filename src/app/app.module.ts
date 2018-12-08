import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule } from "@angular/material";
 import { MatSelectModule } from "@angular/material/select";
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';

const appRoutes: Routes = [
  {
    path: 'patients',
    component: PatientComponent,
    data: { title: 'Patient List' }
  },
  {
    path: 'patient-details/:id',
    component: PatientDetailComponent,
    data: { title: 'Patient Details' }
  },
  {
    path: 'patient-create',
    component: PatientCreateComponent,
    data: { title: 'Create Patient' }
  },
  {
    path: 'patient-edit/:id',
    component: PatientEditComponent,
    data: { title: 'Edit Patient' }
  },
  { path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  },
  {
    path: 'doctors',
    component: DoctorComponent,
    data: { title: 'Doctor List' }
  },
  {
    path: 'doctor-details/:id',
    component: DoctorDetailComponent,
    data: { title: 'Doctor Details' }
  },
  {
    path: 'doctor-create',
    component: DoctorCreateComponent,
    data: { title: 'Create Doctor' }
  },
  {
    path: 'doctor-edit/:id',
    component: DoctorEditComponent,
    data: { title: 'Edit Doctor' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    PatientCreateComponent,
    PatientEditComponent,
    DoctorComponent,
    DoctorDetailComponent,
    DoctorCreateComponent,
    DoctorEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
