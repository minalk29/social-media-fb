import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';
import { UserserviceService } from '../../../services/userservice.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm:any;
  focus=false;
 valid=false;
get fname(){
  return this.registrationForm.get('fname');
}

get lname(){
  return this.registrationForm.get('lname');
}

get password(){
  return this.registrationForm.get('password');
}

get email(){
  return this.registrationForm.get('email');
}

get phone(){
  return this.registrationForm.get('phone');
}

get dob(){
  return this.registrationForm.get('dob');
}

  constructor(private fb:FormBuilder, private UserserviceService:UserserviceService
    ,private router: Router, private datePipe: DatePipe) {
   }

   ngOnInit(){
 this.registrationForm= this.fb.group({
fname:['',[Validators.required,Validators.minLength(3)]],
lname:['',[Validators.required,Validators.minLength(3)]],
email:['',[Validators.email,Validators.required]],
phone:['',[Validators.required,Validators.minLength(11)]],
dob:['',[Validators.required]],
password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*$")]],
confirmPassword:['',Validators.required]

  },{validator:passwordValidator})
}
submit( rf:any)
{
  this.UserserviceService.enroll(rf.value).subscribe(
    data => console.log(data))
    this.router.navigate(['/login']);
}

onFocus(){
  this.focus=true;
}

checkEmail(emailId:any)
{
  console.log("in")
  this.UserserviceService.emailCheck(emailId).subscribe(data =>{
    console.log(data);
    if(data.length!=0)
    {
      this.valid=true;
      console.log("found");
    }
    else if(data.length==0){
      this.valid=false;
      console.log("Not found");
    }
  });
}


checkDob(dob:any)
{
  var date=new Date() ;
  var datePipeString = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
  console.log(datePipeString);
}


}
