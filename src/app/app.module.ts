import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddExpenseModalComponent } from './home/modules/manage-expenses/modals/add-expense-modal/add-expense-modal.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddExpenseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  entryComponents: [ AddExpenseModalComponent ],
  providers: [ MDBSpinningPreloader ],
  bootstrap: [AppComponent]
})
export class AppModule { }
