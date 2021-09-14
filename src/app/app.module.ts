import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/App/app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputSwitchModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DynamicDialogModule,
    ToastModule,
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
