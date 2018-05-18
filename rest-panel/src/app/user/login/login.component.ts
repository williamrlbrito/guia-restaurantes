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
    user: any = {
        username: null,
        password: null
    };

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    login(e){
        e.preventDefault();

        if (!this.user.username || !this.user.password) {
            window.Materialize.toast('Preencha o email e senha', 3000, 'red');
            return;
        }

        let data = {
            grant_type: 'password',
            client_id: '',
            client_secret: '',
            username: '',
            password: '',
            scope: ''
        }

        this.authService
            .login(data)
            .then((res) => {
                document.cookie = "token=" + res.access_token + "; expires=" + res.expires_in;
                this.authService.setAccessToken();
                this.router.navigate(['/']);
            });
    }
}