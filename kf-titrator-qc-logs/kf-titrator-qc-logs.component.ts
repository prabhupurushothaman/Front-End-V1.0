import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kf-titrator-qc-logs',
  templateUrl: './kf-titrator-qc-logs.component.html',
  styleUrls: ['./kf-titrator-qc-logs.component.css']
})
export class KfTitratorQcLogsComponent implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  sampleLabel = "Sample";
  methanolMoisturePercentageLabel = "Methanol Moisture %";
  kFReagentDateLabel = "KF Reagent Date";
  valuesLabel = "Values";
  employeeCodeLabel = "Employee Code";
  kfTitratorQcHeadingLabel = "Primas KF Titrator QC Logs";
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

  methanolMoisturePercentageMinLength = 10;
  methanolMoisturePercentageMaxLength = 15;

  kFReagentDateMinLength = 10;
  kFReagentDateMaxLength = 15;

  valuesMinLength = 10;
  valuesMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public kfTitratorQcForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.kfTitratorQcForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      methanolMoisturePercentage: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      kFReagentDate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      values: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.kfTitratorQcForm.controls[control] as FormControl);
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
  console.log(this.kfTitratorQcForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}




}
