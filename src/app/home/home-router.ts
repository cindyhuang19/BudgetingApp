import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HomePageMainComponent } from './modules/home-page-main/home-page-main.component';
import { ManageExpensesComponent } from './modules/manage-expenses/manage-expenses.component';
import { ManageGoalsOutletComponent } from './modules/manage-goals-outlet/manage-goals-outlet.component';
import { ManageGoalsComponent } from './modules/manage-goals-outlet/modules/manage-goals/manage-goals.component';
import { AchievementsComponent } from './modules/achievements/achievements.component';
import { GlossaryComponent } from './modules/glossary/glossary.component';
import { StudentLoanComponent } from './modules/manage-goals-outlet/modules/student-loan/student-loan.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
                data: {
                    pageName: 'home-page'
                },
                children: [
                    { path: '', redirectTo: 'main', pathMatch: 'full' },
                    {
                        path: 'main',
                        component: HomePageMainComponent,
                        data: {
                            pageName: 'home-page-main'
                        }
                    },
                    {
                        path: 'manage-expenses',
                        component: ManageExpensesComponent,
                        data: {
                            pageName: 'manage-expenses'
                        }
                    },
                    {
                        path: 'manage-goals-outlet',
                        component: ManageGoalsOutletComponent,
                        data: {
                            pageName: 'manage-goals-outlet'
                        },
                        children: [
                            {
                                path: 'manage-goals',
                                component: ManageGoalsComponent,
                                data: {
                                    pageName: 'manage-goals'
                                }
                            },
                            {
                                path: 'student-loan',
                                component: StudentLoanComponent,
                                data: {
                                    pageName: 'student-loan'
                                }
                            }
                        ]
                    },
                    {
                        path: 'glossary',
                        component: GlossaryComponent,
                        data: {
                            pageName: 'glossary'
                        }
                    },
                    {
                        path: 'achievements',
                        component: AchievementsComponent,
                        data: {
                            pageName: 'achievements'
                        }
                    },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}