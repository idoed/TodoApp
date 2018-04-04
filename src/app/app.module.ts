import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule , MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {DragulaModule } from 'ng2-dragula';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { EditableModule, ToggleEvent } from 'ng2-editable';
 


@NgModule({
  declarations: [
    AppComponent, TodoComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, BrowserAnimationsModule,
    FormsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    HttpModule, DragulaModule, Ng2DragDropModule.forRoot(), EditableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements ToggleEvent {
  isActive: boolean;
  isChanged: boolean;
}
