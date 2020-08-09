import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  constructor() { }
  public p  = 1;
  public importFileData:any = [
    {name:"test1.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"dinesh",checked:false},
    {name:"test2.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"dinesh",checked:false},
    {name:"test3.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"kiran",checked:false},
    {name:"test4.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"dinesh",checked:false},
    {name:"test5.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"prathap",checked:false},
    {name:"test6.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"kiran",checked:false},
    {name:"test7.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"kiran",checked:false},
    {name:"test8.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"dinesh",checked:false},
    {name:"test9.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"kiran",checked:false},
    {name:"test10.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"prathap",checked:false},
    {name:"test11.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"kiran",checked:false},
    {name:"test12.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"prathap",checked:false},
    {name:"test13.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"prathap",checked:false},
    {name:"test14.csv",uploadedTime:"2020-06-04 21:25:00",uploadedBy:"dinesh",checked:false},
  ]

  ngOnInit(): void {
  }
  checkAllFiles(event){
    console.log(event)
    this.importFileData.forEach(element => {
      element.checked = event.checked;
    });
  }
  deleteFile(index){
    this.importFileData.splice(index,1)
  }
  deleteAllChecked(){
    let fileData = []
    fileData = this.importFileData.filter(element => {
     return element.checked === false
    });
    this.importFileData = fileData;
  }
}
