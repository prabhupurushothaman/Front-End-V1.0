import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laminar-airflow-champer1-bp-logs',
  templateUrl: './laminar-airflow-champer1-bp-logs.component.html',
  styleUrls: ['./laminar-airflow-champer1-bp-logs.component.css']
})
export class LaminarAirflowChamper1BpLogsComponent  implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  uvDurationLabel = "UV Duration";
  flaskLabel = "Flask";
  actionLabel = "Action";
  employeeCodeLabel = "Employee Code";
  laminarAirflowChamper1BpHeadingLabel = "Primas Laminar Airflow Champer 1 BP Logs";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;

  uvDurationMinLength = 10;
  uvDurationMaxLength = 15;

  flaskMinLength = 10;
  flaskMaxLength = 15;

  actionMinLength = 10;
  actionMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public laminarAirflowChamper1BpForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.laminarAirflowChamper1BpForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      uvDuration: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      flask: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      action: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.laminarAirflowChamper1BpForm.controls[control] as FormControl);
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
  console.log(this.laminarAirflowChamper1BpForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}




}
