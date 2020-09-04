import { Component, OnInit } from '@angular/core';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faBookReader = faBookReader;
  public uiInvalidCredintial = false;

  public fbFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
      email : ['', Validators.required],
      mobile : ['', Validators.required],
  });

  public fbFormGroup1 = this.fb.group({
    username: ['', Validators.required],
    password: ['',Validators.required],
});

  constructor( private fb : FormBuilder,private router : Router ,
    private http : HttpClient ) { }

  ngOnInit(): void {
  }

  login() {
    const data = this.fbFormGroup1.value;
    if (data.username === 'angular' && data.password === 'admin'){
      sessionStorage.setItem('sid','true');
      this.router.navigate(['homepage']);
    }
    else { 
   
    }
  }

  async register(){
    const data = this.fbFormGroup.value;
    const url = "http://localhost:3000/adduser";

    await this.http.post(url,data).toPromise();
    this.router.navigate(['homepage']);
  }

}
