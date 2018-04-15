import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  article = {};
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
  valid() {

    this.http.post('/article', this.article)
    .subscribe(res => {
      console.log(res);
    }, (err)=> {
      console.log(err);
    });
  }
}
