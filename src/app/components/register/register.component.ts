import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @param form

function passwordsMatchValidator(form){
  const password= form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordMatch: true})
  }else{
    confirmPassword.setErrors(null)
  }
}



function symbolValidator(control) {
 if(control.hasError('minlength')) return null;
    if(control.indexof('@') > -1){
      return null
    }else{
      return {
        symbol:true
      }
    }
return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private builder:FormBuilder) { }


  ngOnInit(): void {
    this.buildForm()
  }

buildForm() {
this.registerForm = this.builder.group({
  name:['',Validators.required],
  email:['', [Validators.required,Validators.email]],
  username:['',Validators.required],
  password:['', [Validators.required,symbolValidator,Validators.minLength(4)]],

  confirmPassword: ''
},{
  Validators: passwordsMatchValidator
})
}
  register(){
  }

}
