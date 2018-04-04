import { Component, OnInit } from '@angular/core';
import { TodoService } from'./shared/todo.service';
import { DragulaService } from 'ng2-dragula';
import { EditableModule, ToggleEvent } from 'ng2-editable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService,EditableModule]
})
export class TodoComponent implements OnInit, ToggleEvent  {
  isActive: boolean;
  isChanged: boolean;
  toDoListArray: any[];
  toCheckListArray: any[];
  options: any={
    removeOnSpill: true
  }
  constructor(private toDoService: TodoService ,private  dragulaService: DragulaService) {   dragulaService.setOptions('sixth-bag', {
    moves: function (el, container, handle) {
      return handle.className === 'handle';
    }
  });
    }
  
 
  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      //sort array isChecked false  -> true
        this.toDoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });
    this.toDoService.getToCheckList().snapshotChanges().subscribe(item=>{
      this.toCheckListArray=[];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toCheckListArray.push(x);
      })
    })
  }
  onChange($key: string,title: string,oldTitle:string){
    console.log("title"+title+" $key="+$key);
    
      this.toDoService.updateTitle($key,title,oldTitle);
    
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }
  alterCheckToUnchecked($key: string,isChecked, title: string){
    this.toDoService.UncheckTitle($key,!isChecked,title);

  }
  alterCheck($key: string,isChecked, title: string) {
    this.toDoService.checkTitle($key,!isChecked,title);
  }
  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }
  onDeleteChecked($key : string ){
    this.toDoService.removeTitle1($key);
    console.log("item removed");
    
  }

}