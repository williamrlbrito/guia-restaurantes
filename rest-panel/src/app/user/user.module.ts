import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms"

import {PasswordComponent} from "./password/password.component";
import {ProfileComponent} from "./profile/profile.component";
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
    {path: 'password', component: PasswordComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        PasswordComponent,
        ProfileComponent,
        LoginComponent,
        LogoutComponent
    ],
    providers: [
        AuthService
    ]
})
export class UserModule {

}