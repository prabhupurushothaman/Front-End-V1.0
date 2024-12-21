import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oil-bath1-crnd-logs',
  templateUrl: './oil-bath1-crnd-logs.component.html',
  styleUrls: ['./oil-bath1-crnd-logs.component.css']
})
export class OilBath1CrndLogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  noOfLoadsLabel = "No Of Loads";
  temperatureLabel = "Temperature";
  rpmLabel = "RPM";
  purposeLabel = "Purpose";
  outTimeLabel = "Out Time";
  employeeCodeLabel = "Employee Code";
  oilBath1CrndHeadingLabel = "Primas Oil Bath 1 CRND";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;

  noOfLoadsMinLength = 10;
  noOfLoadsMaxLength = 15;

  temperaturedMinLength = 10;
  temperatureMaxLength = 15;

  rpmMinLength = 10;
  rpmMaxLength = 15;

  purposeMinLength = 10;
  purposeMaxLength = 15;

  outTimeMinLength = 10;
  outTimeMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public oilBath1CrndForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.oilBath1CrndForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      noOfLoads: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      temperature: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      rpm: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purpose: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      outTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.oilBath1CrndForm.controls[control] as FormControl);
    return form.hasError('required') ?
      'This is mandatory' :
      form.hasError('maxlength') ?
      'Max length error' : 
      form.hasError('minlength') ?
      'Min length error' :
      form.hasError('pattern') ? 
       msg:'';
 }

 save(): void{
  console.log(this.oilBath1CrndForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}




}
