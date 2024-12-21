import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-water-analysis-tds',
  templateUrl: './daily-water-analysis-tds.component.html',
  styleUrls: ['./daily-water-analysis-tds.component.css']
})
export class DailyWaterAnalysisTdsComponent implements OnInit
{
  dateLabel = "Date";

  collectionTankZerothLabel = "Collection Tank 0th";
  collectionTankFirstLabel = "Collection Tank 1st";
  collectionTankSecondLabel = "Collection Tank 2nd";

  aerationTankZerothLabel = "Aeration Tank 0th";
  aerationTankFirstLabel = "Aeration Tank 1st";
  aerationTankSecondLabel = "Aeration Tank 2nd";

  digesterTankZerothLabel = "Digester Tank 0th";
  digesterTankFirstLabel = "Digester Tank 1st";
  digesterTankSecondLabel = "Digester Tank 2nd";

  finalTankZerothLabel = "Final Tank 0th";
  finalTankFirstLabel = "Final Tank 1st";
  finalTankSecondLabel = "Final Tank 2nd";
  
  sampleLabel = "Sample";
  amountWeighedLabel = "Amount Weighed";
  employeeCodeLabel = "Employee Code";
  weighingBalance1BpHeadingLabel = "Primas Daily Water Analysis TDS";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  collectionTankZerothMinLength = 10;
  collectionTankZerothMaxLength = 15;

  collectionTankFirstMinLength = 10;
  collectionTankFirstMaxLength = 15;

  collectionTankSecondMinLength = 10;
  collectionTankSecondMaxLength = 15;

  aerationTankZerothMinLength = 10;
  aerationTankZerothMaxLength = 15;

  aerationTankFirstMinLength = 10;
  aerationTankFirstMaxLength = 15;

  aerationTankSecondMinLength = 10;
  aerationTankSecondMaxLength = 15;

  digesterTankZerothMinLength = 10;
  digesterTankZerothMaxLength = 15;

  digesterTankFirstMinLength = 10;
  digesterTankFirstMaxLength = 15;

  digesterTankSecondMinLength = 10;
  digesterTankSecondMaxLength = 15;

  
  finalTankZerothMinLength = 10;
  finalTankZerothMaxLength = 15;

  finalTankFirstMinLength = 10;
  finalTankFirstMaxLength = 15;

  finalTankSecondMinLength = 10;
  finalTankSecondMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public dailyWaterAnalysisTdsForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.dailyWaterAnalysisTdsForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      
      collectionTankZeroth: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      collectionTankFirst: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      collectionTankSecond: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      aerationTankZeroth: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      aerationTankFirst: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      aerationTankSecond: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      digesterTankZeroth: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      digesterTankFirst: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      digesterTankSecond: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      finalTankZeroth: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      finalTankFirst: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      finalTankSecond: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.dailyWaterAnalysisTdsForm.controls[control] as FormControl);
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
  console.log(this.dailyWaterAnalysisTdsForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}


}
