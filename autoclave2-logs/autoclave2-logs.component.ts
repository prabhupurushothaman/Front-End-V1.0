import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autoclave2-logs',
  templateUrl: './autoclave2-logs.component.html',
  styleUrls: ['./autoclave2-logs.component.css']
})
export class Autoclave2LogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  waterLevelLabel = "Water Level";
  loadLabel = "Load";
  startTimeOrInitialTemperatureLabel = "Start Time/Initial Temperature";
  hundredAndTwentyOneCelsiusReachTimeLabel = "121 Celsius Reach Time";
  durationLabel = "Duration";
  endTimeLabel = "End Time";
  unloadTimeLabel = "Unload Time";
  employeeCodeLabel = "Employee Code";
  
  autoclave2HeadingLabel = "Primas Autoclave 2 Logs";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;
  
  waterLevelMinLength = 10;
  waterLevelMaxLength = 15;

  loadMinLength = 10;
  loadMaxLength = 15;

  startTimeOrInitialTemperatureMinLength = 10;
  startTimeOrInitialTemperatureMaxLength = 15;

  hundredAndTwentyOneCelsiusReachTimeMinLength = 10;
  hundredAndTwentyOneCelsiusReachTimeMaxLength = 15;

  durationMinLength = 10;
  durationMaxLength = 15;

  endTimeMinLength = 10;
  endTimeMaxLength = 15;

  unloadTimeMinLength = 10;
  unloadTimeMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public autoclave2Form!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.autoclave2Form = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      waterLevel: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      load: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      startTimeOrInitialTemperature: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      hundredAndTwentyOneCelsiusReachTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      duration: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      unloadTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      endTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.autoclave2Form.controls[control] as FormControl);
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
  console.log(this.autoclave2Form.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}








}
