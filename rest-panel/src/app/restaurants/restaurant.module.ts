import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms"

import {DashboardComponent} from "./dashboard/dashboard.component";
import {EvaluationComponent} from "./dashboard/evaluation.component";

import {DishesComponent} from "./dishes/dishes.component";
import {NewDishComponent} from "./dishes/new-dish.component";
import {EditDishComponent} from "./dishes/edit-dish.component";
import {EditComponent} from "./edit/edit.component";
import {RestaurantService} from "./services/restaurant.service";
import {DishesService} from './services/dishes.service';


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
    {path: 'edit', component: EditComponent}
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
        EditComponent
    ],
    providers: [
        RestaurantService,
        DishesService
    ]
})
export class RestaurantModule {

}