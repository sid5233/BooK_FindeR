import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  linklist = [
    { title: 'homepage', link: 'homepage' },
    { title: 'bookclub', link: '/bookclub' },
    { title: "about-us", link: 'aboutus' },
  ];
  
  constructor(private router: Router) { }
  gotopage(page) {
    this.router.navigate([page]);
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('sid')){
      this.router.navigate(['login']);
    }
  }

  processLogout(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['login'])
  }

}

 
