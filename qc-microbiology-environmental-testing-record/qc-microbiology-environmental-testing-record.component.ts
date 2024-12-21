import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qc-microbiology-environmental-testing-record',
  templateUrl: './qc-microbiology-environmental-testing-record.component.html',
  styleUrls: ['./qc-microbiology-environmental-testing-record.component.css']
})
export class QcMicrobiologyEnvironmentalTestingRecordComponent implements OnInit
{
  referenceNoLabel = "Reference No"
  issueNoLabel = "Issue No"
  issueDateLabel = "Issue Date"
  
  dateLabel = "Date";
  sampleLabel = "Sample";

  totalMicrobialCountLabel = "Total Microbial Count";
  yeastAndMoldCountLabel = "Yeast And Mold Count";
  salmonellaLabel = "Salmonella"
  eColiLabel = "E.Coli"
  coliformLabel = "Coliform"
  remarksLabel = "Remarks"
  employeeCodeLabel = "Employee Code";
  qcMicrobiologyEnvironmentalTestingRecordHeadingLabel = "Primas QC Microbiology Environmental Testing Record";
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

  dateMinLength = 10;
  dateMaxLength = 15;

  sampleMinLength = 10;
  sampleMaxLength = 15;
 
  totalMicrobialCountMinLength = 10;
  totalMicrobialCountMaxLength = 15;

  yeastAndMoldCountMinLength = 10;
  yeastAndMoldCountMaxLength = 15;
  
  salmonellaMinLength = 10;
  salmonellaMaxLength = 15;
  
  eColiMaxLength = 15;
  eColiMinLength = 10;

  coliformMinLength = 10;
  coliformMaxLength = 15;

  remarksMinLength = 10;
  remarksMaxLength = 15;

  employeeCodeMinLength = 10;
  employeeCodeMaxLength = 15;

  public qcMicrobiologyEnvironmentalTestingRecordForm!: FormGroup;

//  constructor(public fb: FormBuilder,private router:Router, public csService: DataService) { 
  constructor(public fb: FormBuilder,private router:Router) { 
    //this.isLoggedIn = csService.isLoggedIn();
  }

  
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.qcMicrobiologyEnvironmentalTestingRecordForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      referenceNo: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      issueNo: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      issueDate: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      sample: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      yeastAndMoldCount: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      totalMicrobialCount: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      salmonella: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      eColi: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      coliform: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      remarks: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      empCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
//      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]],

    });
  }
  public  errorMessage(control: string, msg : string): string {
    const form: FormControl = (this.qcMicrobiologyEnvironmentalTestingRecordForm.controls[control] as FormControl);
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
    console.log(this.qcMicrobiologyEnvironmentalTestingRecordForm.value);
    //this.rotuer.navigate(['/profile']);
    // localStorage.setItem('token', 'JWT');
    // this.isLoginSubject.next(true);
    //this.csService.login(role);
    //  localStorage.setItem('token', 'JWT');
    //this.router.navigate(['/myAccount']);
  }



}
