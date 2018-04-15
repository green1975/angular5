import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  users: any;
  // user= new User;
user= {};
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // this.http.get('/user').subscribe(data => {
    //   this.users = data;
    //   });
}
  login(){
  
    this.http.post('/user', this.user)
    .subscribe(res => {
      console.log(res);
    }, (err)=> {
      console.log(err);
    });
  }

  saveUser() {
    console.log(this.user);
  }
}
