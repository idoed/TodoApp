import { Component, OnInit } from '@angular/core';
import { TodoService } from'./shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  toCheckListArray: any[];
  options: any={
    removeOnSpill: true
  }
  constructor(private toDoService: TodoService) { }

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

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string,isChecked, title: string) {
    this.toDoService.checkOrUnCheckTitle($key,!isChecked,title);
  }
  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }
  onDeleteChecked($key : string ){
    this.toDoService.removeTitle1($key);
    console.log("item removed");
    
  }

}