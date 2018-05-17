import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms"

import {DashboardComponent} from "./dashboard.component";
import {EvaluationComponent} from "./dashboard/evaluation.component";

import {DishesComponent} from "./dishes/dishes.component";
import {NewDishComponent} from "./dishes/new-dish.component";
import {EditDishComponent} from "./dishes/edit-dish.component";
import {EditComponent} from "./edit/edit.component";
import {PasswordComponent} from "./password/password.component";
import {ProfileComponent} from "./profile/profile.component";
import {RestaurantService} from "./restaurant.service";
import {DishesService} from './dishes/dishes.service';


const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: 'evaluation/:id', component: EvaluationComponent}
        ]
    },
    {
        path: 'dishes', component: DishesComponent,
        children: [
            {path: 'new', component: NewDishComponent},
            {path: 'edit/:id', component: EditDishComponent}
        ]
    },
    {path: 'edit', component: EditComponent},
    {path: 'password', component: PasswordComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        NewDishComponent,
        EditDishComponent,
        EditComponent,
        PasswordComponent,
        ProfileComponent
    ],
    providers: [
        RestaurantService,
        DishesService
    ]
})
export class RestaurantModule {

}