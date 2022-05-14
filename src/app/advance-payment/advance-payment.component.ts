import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-advance-payment',
  templateUrl: './advance-payment.component.html',
  styleUrls: ['./advance-payment.component.css']
})
export class AdvancePaymentComponent implements OnInit {

  paymentform!: FormGroup;
  submitted = false;

  patient_data=[{  
    "id": 1,  
    "name": "Smith",  
    "ph_no": "8051541547",  
    "gender": "male"  
  },
  {  
    "id": 2,  
    "name": "David",  
    "ph_no": "9851541547",  
    "gender": "male"  
  }, 
  {  
    "id": 3,  
    "name": "Karthi",  
    "ph_no": "7841541547",  
    "gender": "male"  
  }, 
  {  
    "id": 4,  
    "name": "Raja",  
    "ph_no": "6944541547",  
    "gender": "male"  
  }, 
  {  
    "id": 5,  
    "name": "John",  
    "ph_no": "9787455651",  
    "gender": "male"  
  }  
]  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paymentform = this.formBuilder.group(
      {
        paymentMode: ['', Validators.required],
        paymentAmount: ['',[Validators.required,Validators.pattern(/^-?([1-9]\d*)?$/)]],
        paymentRemarks: ['', [Validators.required]]
      }
    );
  }

  get check(){
    return this.paymentform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.paymentform.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.paymentform.reset();
  }
}
