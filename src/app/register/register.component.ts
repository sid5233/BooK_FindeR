import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';



import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public fbFormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
    email : ['', Validators.required],
    mobile : ['', Validators.required]
  });



  constructor ( 
    private fb : FormBuilder, 
    private router : Router , 
    private http : HttpClient) {}

  ngOnInit(): void {}
   async register(){
     const data = this.fbFormGroup.value;
     const url = "http://localhost:3000/adduser";

     await this.http.post(url,data).toPromise();
     this.router.navigate(['login']);
   }
}
