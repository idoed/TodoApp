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

  addTitle(title: string) {
    if (this.toDoList = this.firebasedb.list('titles')) {
      this.toDoList.push({
        title: title,

      });
    }
  }

  checkOrUnCheckTitle($key: string, flag: boolean, title: string) {
    this.toDoList.remove($key);
    this.toCheckList.push({
      title: title,
      isChecked: flag
      
    }); 
  }
//2 Methoods that receivng Key value and deleting the raw that chosen.
  removeTitle($key: string) {
    if (this.toDoList = this.firebasedb.list('titles')){
    this.toDoList.remove($key);
    }
  }
  removeTitle1($key:string){
    this.toCheckList.remove($key);
  }



}