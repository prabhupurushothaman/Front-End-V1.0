import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eutech-ph1-bp-logs',
  templateUrl: './eutech-ph1-bp-logs.component.html',
  styleUrls: ['./eutech-ph1-bp-logs.component.css']
})
export class EutechPh1BpLogsComponent  implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  sampleLabel = "Sample";
  phLabel = "PH";
  employeeCodeLabel = "Employee Code";
  eutechPh1BpHeadingLabel = "Primas Eutech PH 1 BP Logs";
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

  phMinLength = 10;
  phMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public eutechPh1BpForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.eutechPh1BpForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      ph: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.eutechPh1BpForm.controls[control] as FormControl);
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
  console.log(this.eutechPh1BpForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}


}
