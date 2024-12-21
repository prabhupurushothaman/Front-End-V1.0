import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ultrasonic-cleaner-crnd-logs',
  templateUrl: './ultrasonic-cleaner-crnd-logs.component.html',
  styleUrls: ['./ultrasonic-cleaner-crnd-logs.component.css']
})
export class UltrasonicCleanerCrndLogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  sampleLabel = "Sample";
  inTimeLabel = "In Time";
  purposeLabel = "Purpose";
  outTimeLabel = "Out Time";
  employeeCodeLabel = "Employee Code";
  ultrasonicCleanerCrndHeadingLabel = "Primas Ultrasonic Cleaner CRND Logs";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;

  sampleMinLength = 10;
  sampleMaxLength = 15;

  inTimeMinLength = 10;
  inTimeMaxLength = 15;

  purposeMinLength = 10;
  purposeMaxLength = 15;

  outTimeMinLength = 10;
  outTimeMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public ultrasonicCleanerCrndForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.ultrasonicCleanerCrndForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      inTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purpose: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      outTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.ultrasonicCleanerCrndForm.controls[control] as FormControl);
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
    console.log(this.ultrasonicCleanerCrndForm.value);
    //this.rotuer.navigate(['/profile']);
    // localStorage.setItem('token', 'JWT');
    // this.isLoginSubject.next(true);
    //this.csService.login(role);
    //  localStorage.setItem('token', 'JWT');
    //this.router.navigate(['/myAccount']);
  }
}