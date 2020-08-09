import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }
  public userData:any = [
    {userName:"Dinesh",password:"Dinesh1@3",role:"user"},
    {userName:"Prathap",password:"Prathap1@3",role:"Admin"},
    {userName:"Kiran",password:"Kiran1@3",role:"Admin"},
  ];
  public userName:string ="";
  public password:string = "";
  public isLogin:boolean = false;
  public loginUserDetails:any = {};
  ngOnInit(): void {
  }
  login(){
    this.userData.forEach(element => {
      if(element.userName.toLowerCase() == this.userName.toLowerCase() && element.password == this.password){
        this.loginUserDetails = element;
        sessionStorage.setItem("loginUser",JSON.stringify(this.loginUserDetails))
        this.isLogin = true;
        this.router.navigate(['/dashboard']);
      }
    });
    if(!this.isLogin){
      this.userName = "";
      this.password = "";
      alert("Please Enter correct Username and Password")
    }
  }
}
