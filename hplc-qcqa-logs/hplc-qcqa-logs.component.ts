import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hplc-qcqa-logs',
  templateUrl: './hplc-qcqa-logs.component.html',
  styleUrls: ['./hplc-qcqa-logs.component.css']
})
export class HplcQcqaLogsComponent  implements OnInit
{
  dateLabel = "Date";
  dateFormatLabel = "MM/DD/YYYY";
  timeLabel = "Time";
  bufferLabel = "Buffer";
  quantityLabel = "Quantity";
  degasLabel = "Degas";
  startTimeLabel = "Start Time";
  columnTemperatureLabel = "Column Temperature";
  flowRateLabel = "Flow Rate";
  mpaLabel = "MPa";
  purgeOnTimeLabel = "Purge On Time";
  purgeOffTimeLabel = "Purge Off Time";
  sampleIdLabel = "Sample Id";
  noOfSampleLabel = "No of Sample";
  endTimeLabel = "End Time";
  runningStatusLabel = "Running Status";
  shutdownStatusLabel = "Shutdown Status"


  employeeCodeLabel = "Employee Code";
  hplcQcqaHeadingLabel = "Primas HPLC QC/QA Logs";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  timeMinLength = 10;
  timeMaxLength = 15;

  bufferMinLength = 10;
  bufferMaxLength = 15;

  quantityMinLength = 10;
  quantityMaxLength = 15;

  degasMinLength = 10;
  degasMaxLength = 15;

  startTimeMinLength = 10;
  startTimeMaxLength = 15;

  columnTemperatureMinLength = 10;
  columnTemperatureMaxLength = 15;

  flowRateMinLength = 10;
  flowRateMaxLength = 15;

  mpaMinLength = 10;
  mpaMaxLength = 15;

  purgeOnTimeMinLength = 10;
  purgeOnTimeMaxLength = 15;

  purgeOffTimeMinLength = 10;
  purgeOffTimeMaxLength = 15;

  sampleIdMinLength = 10;
  sampleIdMaxLength = 15;
  
  noOfSampleMinLength = 10;
  noOfSampleMaxLength = 15;

  endTimeMinLength = 10;
  endTimeMaxLength = 15;

  runningStatusMinLength = 10;
  runningStatusMaxLength = 15;

  shutdownStatusMinLength = 10;
  shutdownStatusMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public hplcQcqaForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.hplcQcqaForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      time: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      buffer: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      quantity: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      degas: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      startTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      columnTemperature: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      flowRate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      mpa: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purgeOnTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      purgeOffTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sampleId: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      noOfSample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      endTime: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      runningStatus: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      shutdownStatus: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.hplcQcqaForm.controls[control] as FormControl);
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
    console.log(this.hplcQcqaForm.value);
    //this.rotuer.navigate(['/profile']);
  // localStorage.setItem('token', 'JWT');
  // this.isLoginSubject.next(true);
    //this.csService.login(role);
  //  localStorage.setItem('token', 'JWT');
    //this.router.navigate(['/myAccount']);
  }


}
