import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  username= new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.minLength(8)
  ]);
  password= new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);
  registerForm : FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm=this.fb.group({
      // username:new FormControl(),
      u:this.username,
      p:this.password
    })
  }

  onRegister(){
    console.log(this.registerForm);
  }
}
