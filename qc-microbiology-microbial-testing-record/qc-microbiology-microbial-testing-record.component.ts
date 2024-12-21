import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qc-microbiology-microbial-testing-record',
  templateUrl: './qc-microbiology-microbial-testing-record.component.html',
  styleUrls: ['./qc-microbiology-microbial-testing-record.component.css']
})
export class QcMicrobiologyMicrobialTestingRecordComponent implements OnInit
{
  referenceNoLabel = "Reference No"
  issueNoLabel = "Issue No"
  issueDateLabel = "Issue Date"
  
  receivedDateLabel = "Received Date";
  testingDateLabel = "Testing Date";
  natureOfSampleLabel = "Nature of Sample";
  batchIdLabel = "Batch Id";

  totalAerobicMicrobialCountLabel = "Total Aerobic Microbial Count";
  yeastAndMoldCountLabel = "Yeast And Mold Count";
  
  coliformCountLabel = "Coliform Count"
  remarksLabel = "Remarks"
  employeeCodeLabel = "Employee Code";
  qcMicrobiologyMicrobialTestingRecordHeadingLabel = "Primas QC Microbiology Microbial Testing Record";
  helpLabel = "Help";
  toolTipMsg ="Tooltip Messages To Be Updated";
  submitLabel = "Submit";

  //Validation
  referenceNoMinLength = 10;
  referenceNoMaxLength = 15;

  issueNoMinLength = 10;
  issueNoMaxLength = 15;

  issueDateMinLength = 10;
  issueDateMaxLength = 15;

  receivedDateMinLength = 10;
  receivedDateMaxLength = 15;

  testingDateMinLength = 10;
  testingDateMaxLength = 15;

  natureOfSampleMinLength = 10;
  natureOfSampleMaxLength = 15;
 
  batchIdMinLength = 10;
  batchIdMaxLength = 15;

  totalAerobicMicrobialCountMinLength = 10;
  totalAerobicMicrobialCountMaxLength = 15;
  
  yeastAndMoldCountMinLength = 10;
  yeastAndMoldCountMaxLength = 15;
  
  coliformCountMaxLength = 15;
  coliformCountMinLength = 10;

  remarksMinLength = 10;
  remarksMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public qcMicrobiologyMicrobialTestingRecordForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.qcMicrobiologyMicrobialTestingRecordForm = this.fb.group({
      referenceNo: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      issueNo: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      issueDate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      receivedDate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      testingDate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      natureOfSample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      batchId: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      yeastAndMoldCount: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      totalAerobicMicrobialCount: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      coliformCount: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      remarks: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.qcMicrobiologyMicrobialTestingRecordForm.controls[control] as FormControl);
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
    console.log(this.qcMicrobiologyMicrobialTestingRecordForm.value);
    //this.rotuer.navigate(['/profile']);
    // localStorage.setItem('token', 'JWT');
    // this.isLoginSubject.next(true);
    //this.csService.login(role);
    //  localStorage.setItem('token', 'JWT');
    //this.router.navigate(['/myAccount']);
  }


}
