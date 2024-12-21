import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-air-oven-crnd-logs',
  templateUrl: './hot-air-oven-crnd-logs.component.html',
  styleUrls: ['./hot-air-oven-crnd-logs.component.css']
})
export class HotAirOvenCrndLogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  loadLabel = "Load";
  inTimeLabel = "On Time";
  purposeLabel = "Purpose";
  outTimeLabel = "Out Time";
  employeeCodeLabel = "Employee Code";
  hotAirOvenCrndHeadingLabel = "Primas Hot Air Oven CRND Logs";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;

  loadMinLength = 10;
  loadMaxLength = 15;

  inTimeMinLength = 10;
  inTimeMaxLength = 15;

  purposeMinLength = 10;
  purposeMaxLength = 15;

  outTimeMinLength = 10;
  outTimeMaxLength = 15;
  
  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public hotAirOvenCrndForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.hotAirOvenCrndForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      load: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      inTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purpose: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      outTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.hotAirOvenCrndForm.controls[control] as FormControl);
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
  console.log(this.hotAirOvenCrndForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}

}
