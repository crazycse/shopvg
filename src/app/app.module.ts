import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewItemComponent } from './view-item/view-item.component';
import { RouterModule } from '@angular/router';
import { EditItemComponent } from './edit-item/edit-item.component';

 
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ViewItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ViewItemComponent },
      { path: 'add', component: AddItemComponent },
      { path: 'edit/:itemId', component:EditItemComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
