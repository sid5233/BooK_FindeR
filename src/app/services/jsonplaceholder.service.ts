import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JSONPlaceholderService {

  constructor( private http : HttpClient) { }
  
  getData() : Observable <any> {
    const url = "https://www.googleapis.com/books/v1/volumes?q=harry"
    return this.http.get<any>(url)
    console.log(this.getData[0].volumeInfo.title.value)
  }
}

