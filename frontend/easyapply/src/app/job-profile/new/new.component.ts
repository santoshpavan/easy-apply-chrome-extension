import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  //jobProfileForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder, 
    private router: Router,
    private http: HttpClient) { 
  }

  jobProfileForm = this.formbuilder.group({
      jobProfileName: new FormControl(''),
      jobType: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      linkedinProfile: new FormControl(''),
      githubProfile: new FormControl(''),
      website: new FormControl(''),
      informationSource: new FormControl(''),
      userId: new FormControl(GlobalConstants.userID)
    });

  onSubmit() {
    // console.log(this.jobProfileForm.value);
    this.http.post(GlobalConstants.backendURL + '/jobProfile', this.jobProfileForm.value).subscribe(responseData => {
      console.log(responseData);
    });
    this.router.navigateByUrl('dashboard');
  }
}