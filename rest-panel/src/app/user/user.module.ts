import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms"

import {PasswordComponent} from "./password/password.component";
import {ProfileComponent} from "./profile/profile.component";


const appRoutes: Routes = [
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
        PasswordComponent,
        ProfileComponent
    ],
    providers: []
})
export class UserModule {

}