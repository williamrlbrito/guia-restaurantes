import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        #loginForm {
            margin-top: 50px;
        }
    `]
})
export class LoginComponent {
    
}