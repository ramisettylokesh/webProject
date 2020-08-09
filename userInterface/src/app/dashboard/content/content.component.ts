import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public userData:any ={};
  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem("loginUser"));
  }

}
