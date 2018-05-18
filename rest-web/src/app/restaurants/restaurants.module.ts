import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RestaurantComponent } from "./components/restaurant.component";

const appRoutes: Routes = [
    {path: 'search', component: RestaurantComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    declarations: [
        RestaurantComponent
    ]
})
export class RestaurantsModule {
    
}