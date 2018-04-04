import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  toCheckList: AngularFireList<any>;
  title1: string;
  constructor(private firebasedb: AngularFireDatabase) { }
  //Get the list of titles 
  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }
  //Get the Checked list title 
  getToCheckList() {
    this.toCheckList = this.firebasedb.list('chackedTitles')
    return this.toCheckList;
  }
  //Receiving String title and add it to DB as ChackedTitles, 
  addTitleChecked(title: string) {
    this.toCheckList.push({
      title: title,
    });
  }
//Adding new item to the list by Taking the String that was writen on the input text.
  addTitle(title: string) {
    if (this.toDoList = this.firebasedb.list('titles')) {
      this.toDoList.push({
        title: title,

      });
    }
  }
//Moving the Item from the Main list to the CheckedList and changing the flag from false to true;
  checkTitle($key: string, flag: boolean, title: string) {
    this.toDoList.remove($key);
    this.toCheckList.push({
      title: title,
      isChecked: flag
      
    }); 
  }
  //Moving the item from the CheckedList to the Mainlist and Changing the flag back to false;
  UncheckTitle($key: string, flag: boolean, title: string) {
    this.toCheckList.remove($key);
    this.toDoList.push({
      title: title,
      isChecked: flag
      
    }); 
  }
//2 Methoods that receivng Key value and deleting the 
  removeTitle($key: string) {
    if (this.toDoList = this.firebasedb.list('titles')){
    this.toDoList.remove($key);
    }
  }
  removeTitle1($key:string){
    this.toCheckList.remove($key);
  }
  updateTitle($key:string ,title:string,oldTitle: string){
    console.log("2 title"+title+" $key="+$key);
    this.toDoList.update($key, {title: title}); 
  }



}