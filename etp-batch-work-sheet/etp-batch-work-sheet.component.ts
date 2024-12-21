import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etp-batch-work-sheet',
  templateUrl: './etp-batch-work-sheet.component.html',
  styleUrls: ['./etp-batch-work-sheet.component.css']
})
export class EtpBatchWorkSheetComponent implements OnInit
{
  dateLabel = "Date";

  secondarySettlerFlowOutletMlPerMminLabel = "Secondary Settler Flow Outlet ML/Min";
  secondarySettlerFlowOutletColourLabel = "Secondary Settler Flow Outlet Colour";
  secondarySettlerFlowOutletPhLabel = "Secondary Settler Flow Outlet pH";

  limeAdditionMlPerSecLabel = "Lime Addition Ml/Sec";
  colourRemovalMlPerSecLabel = "Colour Removal Ml/Sec";
  polyMlPerSecLabel = "Poly Ml/Sec";

  tertiarySettlerOutletColourLabel = "Tertiary Settler Outlet Colour";
  tertiarySettlerOutletPhLabel = "Tertiary Settler Outlet Ph";

  totalVolumeOfProcessedLabel = "Total Volume of Processed";
  totalVolumeInFinalTankLabel = "Total Volume in Final Tank";
  
  employeeCodeLabel = "Employee Code";
  verifiedEmployeeCodeLabel = "Verified Employee Code";

  etpBatchWorkSheetHeadingLabel = "Primas ETP Batch Work Sheet";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  secondarySettlerFlowOutletMlPerMminMinLength = 10;
  secondarySettlerFlowOutletMlPerMminMaxLength = 15;

  collectionTankFirstMinLength = 10;
  collectionTankFirstMaxLength = 15;

  secondarySettlerFlowOutletColourMinLength = 10;
  secondarySettlerFlowOutletColourMaxLength = 15;

  secondarySettlerFlowOutletPhMinLength = 10;
  secondarySettlerFlowOutletPhMaxLength = 15;

  limeAdditionMlPerSecMinLength = 10;
  limeAdditionMlPerSecMaxLength = 15;

  colourRemovalMlPerSecMinLength = 10;
  colourRemovalMlPerSecMaxLength = 15;

  polyMlPerSecMinLength = 10;
  polyMlPerSecMaxLength = 15;

  tertiarySettlerOutletColourMinLength = 10;
  tertiarySettlerOutletColourMaxLength = 15;

  tertiarySettlerOutletPhMinLength = 10;
  tertiarySettlerOutletPhMaxLength = 15;

  
  totalVolumeOfProcessedMinLength = 10;
  totalVolumeOfProcessedMaxLength = 15;

  totalVolumeInFinalTankMinLength = 10;
  totalVolumeInFinalTankMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  verifiedEmployeeCodeMinLength = 10;
  verifiedEmployeeCodeMaxLength = 15;

  public etpBatchWorkSheetForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.etpBatchWorkSheetForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      
      secondarySettlerFlowOutletMlPerMmin: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      secondarySettlerFlowOutletColour: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      secondarySettlerFlowOutletPh: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      limeAdditionMlPerSec: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      colourRemovalMlPerSec: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      polyMlPerSec: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      tertiarySettlerOutletColour: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      tertiarySettlerOutletPh: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      totalVolumeOfProcessed: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

      totalVolumeInFinalTank: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      verifiedEmpCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]

//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.etpBatchWorkSheetForm.controls[control] as FormControl);
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
  console.log(this.etpBatchWorkSheetForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}


}
