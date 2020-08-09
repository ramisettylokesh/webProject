import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  public usersDetails = [
    {id:1,userName:"Vadlamani Dinesh",userId:"Dinesh",password:"Dinesh1@3"},
    {id:2,userName:"Vadde Lakshmi Prathap",userId:"Prathap",password:"Prathap1@3"},
    {id:3,userName:"Jinka Venkata Sai Kiran",userId:"Kiran",password:"Kiran1@3"},
  ];
  public p = 1;
  public dialogHeader = "";
  public display:boolean = false;
  public userName = "";
  public userId = "";
  public password ="";
  ngOnInit(): void {
  }
  addUser(){
   if(this.dialogHeader == 'Create User Information'){
    let currentId = this.usersDetails.length + 1;
    let currentUserData = {
      id:currentId,
      userName:this.userName,
      userId:this.userId,
      password:this.password
    }
    this.usersDetails.push(currentUserData)
   }
   else{
    this.usersDetails.forEach(element => {
      if(element.userId == this.userId){
        element.userName = this.userName;
        element.password = this.password;
      }
    });
   }
    this.display = false
  }
  closeDialog(){
   this.display = false;
  }
  deleteFile(index){
    this.usersDetails.splice(index,1)
  }
  editUserData(id,index){
    this.display = true;
    if(id == -1){
      this.dialogHeader = "Create User Information";
      this.userId = "";
      this.userName = "";
      this.password = "";
    }
    else{
      this.dialogHeader = "Update User Information";
      this.userId = this.usersDetails[index].userId;
      this.userName =this.usersDetails[index].userName;
      this.password = this.usersDetails[index].password;
    }
  }
}
