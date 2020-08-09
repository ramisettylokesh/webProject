import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.css']
})
export class ViewLeadsComponent implements OnInit {

  constructor() { }
  public selectedDropdownValue = "";
  public leadsList:any = [
    {id:1,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:2,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:3,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:4,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:5,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:6,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:7,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:8,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:9,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:10,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:11,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:12,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:13,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:14,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:15,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:16,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""},
    {id:17,checked:false,company:"Adweak Studio",createdBy:"",uploadedOn:"2020-07-09 18:25:23",createdOn:"0000-00-00 00:00:00",leadFullName:"Jinka Sai Kiran",leadFirstName:"Jinka",leadMiddleName:"",leadLastName:"Sai Kiran",email1:"",email2:"",email3:""}

  ]
  public display = false;
  public dialogHeader = "";
  public domainName = "";
  public format1 = "";
  public format2 = "";
  public format3 = "";
  public p = 1;
  public formatType = [
    {name:"",value:"select"},
    {name:"dot",value:"."},
    {name:"slash",value:"/"},
    {name:"star",value:"*"},
    {name:"atRate",value:"@"}
  ]
  ngOnInit(): void {
  }
  checkAllFiles(event){
    console.log(event)
    this.leadsList.forEach(element => {
      element.checked = event.checked;
    });
  }
  dropDownSelection(value){
    this.selectedDropdownValue = value;
  }
  openDomainDialog(companyName){
    this.display = true;
    this.format1 = "";
    this.format2 = "";
    this.format3 = "";
    this.domainName = "";
    this.dialogHeader = companyName;
  }
  dropDownAction(){
    if(this.selectedDropdownValue == "delete"){
      let fileData = []
      fileData = this.leadsList.filter(element => {
       return element.checked === false
      });
      this.leadsList = fileData;
    }
  }
  closeDialog(){
    this.display = false;
  }
  addDomain(){
    console.log("something")
  }
}
