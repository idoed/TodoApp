import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  toCheckList: AngularFireList<any>;
  title1: string;
  constructor(private firebasedb: AngularFireDatabase) { }
  
  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }
  getToCheckList() {
    this.toCheckList = this.firebasedb.list('chackedTitles')
    return this.toCheckList;
  }
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

  removeTitle($key: string) {
    if (this.toDoList = this.firebasedb.list('titles')){
    this.toDoList.remove($key);
    }
  }
  removeTitle1($key:string){
    this.toCheckList.remove($key);
  }



}