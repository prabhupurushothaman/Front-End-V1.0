import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rotavapor-crnd-logs',
  templateUrl: './rotavapor-crnd-logs.component.html',
  styleUrls: ['./rotavapor-crnd-logs.component.css']
})
export class RotavaporCrndLogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  sampleLabel = "Sample";
  waterBathTemperatureChillerTemperatureRPMLabel = "Water Bath Temperature/Chiller Temperature RPM";
  endTimeLabel = "End Time";
  purposeOrRemarksLabel = "Purpose/Remarks";
  employeeCodeLabel = "Employee Code";
  rotavaporCrndHeadingLabel = "Primas Rotavapor CRND Logs";
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

  waterBathTemperatureChillerTemperatureRPMMinLength = 10;
  waterBathTemperatureChillerTemperatureRPMMaxLength = 15;

  endTimeMinLength = 10;
  endTimeMaxLength = 15;

  purposeOrRemarksMinLength = 10;
  purposeOrRemarksMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public rotavaporCrndForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.rotavaporCrndForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      waterBathTemperatureChillerTemperatureRPM: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      endTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purposeOrRemarks: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.rotavaporCrndForm.controls[control] as FormControl);
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
    console.log(this.rotavaporCrndForm.value);
    //this.rotuer.navigate(['/profile']);
    // localStorage.setItem('token', 'JWT');
    // this.isLoginSubject.next(true);
    //this.csService.login(role);
    //  localStorage.setItem('token', 'JWT');
    //this.router.navigate(['/myAccount']);
  }

}
