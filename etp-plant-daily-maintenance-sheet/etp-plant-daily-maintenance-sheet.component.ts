import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etp-plant-daily-maintenance-sheet',
  templateUrl: './etp-plant-daily-maintenance-sheet.component.html',
  styleUrls: ['./etp-plant-daily-maintenance-sheet.component.css']
})
export class EtpPlantDailyMaintenanceSheetComponent  implements OnInit
{
  dateLabel = "Date";

  collectionTankPhLabel = "Collection Tank pH";
  aerationTankPhLabel = "Aeration Tank pH";
  digesterOutletPhLabel = "Digester Outlet pH";
  mlssVolumeLabel = "MLSS Volume";
  finalProcessWaterTdsLabel = "Final Process Water TDS";
  startTimeLabel = "Start Time";
  endTimeLabel = "End Time";
    
  employeeCodeLabel = "Employee Code";
  verifiedEmployeeCodeLabel = "Verified Employee Code";

  etpPlantDailyMaintenanceSheetHeadingLabel = "Primas ETP Plant Daily Maintenance Sheet";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  collectionTankPhMinLength = 10;
  collectionTankPhMaxLength = 15;

  aerationTankPhMinLength = 10;
  aerationTankPhMaxLength = 15;

  digesterOutletPhMinLength = 10;
  digesterOutletPhMaxLength = 15;

  mlssVolumeMinLength = 10;
  mlssVolumeMaxLength = 15;

  finalProcessWaterTdsMinLength = 10;
  finalProcessWaterTdsMaxLength = 15;

  startTimeMinLength = 10;
  startTimeMaxLength = 15;

  endTimeMinLength = 10;
  endTimeMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  verifiedEmployeeCodeMinLength = 10;
  verifiedEmployeeCodeMaxLength = 15;

  public etpPlantDailyMaintenanceSheetForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.etpPlantDailyMaintenanceSheetForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      
      collectionTankPh: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
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
      //TODO: Remove one Emp Code from the below code
      verifiedEmpCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      verifiedEmployeeCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]

//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.etpPlantDailyMaintenanceSheetForm.controls[control] as FormControl);
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
  console.log(this.etpPlantDailyMaintenanceSheetForm.value);
  //this.rotuer.navigate(['/profile']);
 // localStorage.setItem('token', 'JWT');
 // this.isLoginSubject.next(true);
 
  //this.csService.login(role);
//  localStorage.setItem('token', 'JWT');
  //this.router.navigate(['/myAccount']);
}


}
