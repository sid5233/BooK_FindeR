import { Component, OnInit } from '@angular/core';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faBookReader = faBookReader;

  public fbFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
  });
  constructor( private fb : FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    const data = this.fbFormGroup.value;
    if (data.username === 'angular' && data.password === 'admin'){
    this.router.navigate(['register']);
    }
    else { }
  }

}
