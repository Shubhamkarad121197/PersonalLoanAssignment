import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup, Validators} from '@angular/forms'
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   Mycity:string="";
   
    Mypan:string="";
    MyfullName:string="";
    Myemail:any="";
    Mydate:any="";
    MymobileNo:any="+91";
    MyOtp:any="";
  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  loanApplicationForm=new FormGroup({
    city:new FormControl('',[Validators.required]),
    pan:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    fullName:new FormControl('',[Validators.required,Validators.maxLength(140)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    date:new FormControl('',[Validators.required]),
    mobileNo:new FormControl('',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]),
    OTP:new FormControl('',[Validators.required,Validators.maxLength(4)]),


  });

 
  
  get city(){
    return this.loanApplicationForm.get('city')

  }
  get pan(){
    return this.loanApplicationForm.get('pan')

  }
  get fullName(){
    return this.loanApplicationForm.get('fullName')

  }
  get email(){
    return this.loanApplicationForm.get('email')

  }
  get date(){
    return this.loanApplicationForm.get('date')

  }
  get mobileNo(){
    return this.loanApplicationForm.get('mobileNo')

  }
  get OTP(){
    return this.loanApplicationForm.get('OTP')

  }

  Otp(){
      alert(Math.floor(Math.random()*10000));

  }
  UserInfo(){
    this.user.saveApplicant(this.loanApplicationForm.value);
  }
    
    

  }


