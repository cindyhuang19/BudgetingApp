import { HomeComponent } from './home.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HomePageMainComponent } from './modules/home-page-main/home-page-main.component';
import { ManageExpensesComponent} from './modules/manage-expenses/manage-expenses.component';
import { ManageGoalsComponent} from './modules/manage-goals/manage-goals.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';


import { NgModule } from '@angular/core';
import { HomeRouter } from './home-router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent, HomePageComponent, HomePageMainComponent, ManageExpensesComponent, ManageGoalsComponent
    ],
    imports: [HomeRouter, FormsModule, CommonModule],
    exports: [HomeComponent],
    providers: [MDBModalRef, MDBModalService]
})

export class HomeModule {}
