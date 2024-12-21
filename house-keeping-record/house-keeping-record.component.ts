import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-keeping-record',
  templateUrl: './house-keeping-record.component.html',
  styleUrls: ['./house-keeping-record.component.css']
})
export class HouseKeepingRecordComponent  implements OnInit
{
  dateLabel = "Date";

  groundFloorLabel = "Ground Floor";
  groundFloorRoomsLabel = "Ground Floor Rooms";
  receptionAndCanteenLabel = "Reception and Canteen";
  utilitiesAreaLabel = "Utilities Area";
  productionAreaLabel = "Production Area";
  firstFloorLabsLabel = "First Floor Labs";
  staircaseLabel = "Staircase";
  secondFloorRoomLabel = "Second Floor Room";
  roEtpAndPowerCaseLabel = "RO, ETP and Power House";
  cleanedByLabel = "Cleaned By";
  employeeCodeLabel = "Employee Code";
  houseKeepingRecordHeadingLabel = "Primas House Keeping Record";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  dateMinLength = 10;
  dateMaxLength = 15;
  
  groundFloorMinLength = 10;
  groundFloorMaxLength = 15;
  
  groundFloorRoomsMinLength = 10;
  groundFloorRoomsMaxLength = 15;

  receptionAndCanteenMinLength = 10;
  receptionAndCanteenMaxLength = 15;

  utilitiesAreaMinLength = 10;
  utilitiesAreaMaxLength = 15;

  productionAreaMinLength = 10;
  productionAreaMaxLength = 15;

  firstFloorLabsMinLength = 10;
  firstFloorLabsMaxLength = 15;

  staircaseMinLength = 10;
  staircaseMaxLength = 15;

  secondFloorRoomMinLength = 10;
  secondFloorRoomMaxLength = 15;

  roEtpAndPowerCaseMinLength = 10;
  roEtpAndPowerCaseMaxLength = 15;

  cleanedByMinLength = 10;
  cleanedByMaxLength = 15;
  
  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public houseKeepingRecordForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.houseKeepingRecordForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      groundFloor: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      groundFloorRooms: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      receptionAndCanteen: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      utilitiesArea: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      productionArea: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      firstFloorLabs: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      staircase: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      secondFloorRoom: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      roEtpAndPowerCase: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      cleanedBy: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
    public  errorMessage(control: string, msg : string): string {
      const form: FormControl = (this.houseKeepingRecordForm.controls[control] as FormControl);
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
        console.log(this.houseKeepingRecordForm.value);
        //this.rotuer.navigate(['/profile']);
      // localStorage.setItem('token', 'JWT');
      // this.isLoginSubject.next(true);
      
        //this.csService.login(role);
      //  localStorage.setItem('token', 'JWT');
        //this.router.navigate(['/myAccount']);
      }


}
