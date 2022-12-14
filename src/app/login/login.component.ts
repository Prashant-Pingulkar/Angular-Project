import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public loginForm: FormGroup
  constructor(private fb:FormBuilder) { 

  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      uName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  

}
