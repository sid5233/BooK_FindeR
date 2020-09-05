import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder} from '@angular/forms';
 import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

    data : Array<any>



  public fbFormGroup = this.fb.group({});
  
  constructor( private fb : FormBuilder,
    private JSONplaceholder : JSONPlaceholderService ) {
      this.data = new Array<any>() 
   }

  ngOnInit(): void {
  }

  getDataFromAPI(){
      this.JSONplaceholder.getData().subscribe((data) => {
        console.log(data);
        this.data = data
        console.log(data[0].volumeInfo.title)
      
      })
  }



}
