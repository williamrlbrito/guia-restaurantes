import { Injectable, EventEmitter } from "@angular/core";
import { AppHttpService } from "../../app-http.service";
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/toPromise';


@Injectable()

export class AuthService extends AppHttpService {
    eventEmitter: EventEmitter<any> = new EventEmitter();

    builder(resource: string = ''){
        return super.builder('auth' + resource);
    }

    getUser() {
        return this.builder('/me')
            .list();
    }

    changePassword(data) {
        let observable = this.http.post(this.url + '/change-password', data, {headers: this.header});
        return this.toPromise(observable);
    }

    editProfile(data) {
        let observable = this.http.post(this.url + '/edit-profile', data, {headers: this.header});
        return this.toPromise(observable);
    }

    login(data){
        let observable = this.http.post(environment.server_url + '/oauth/token', data);  
        return this.toPromise(observable);
    }

    logout() {
        let observable = this.http.get(this.url + '/logout', {headers: this.header});
        return this.toPromise(observable);
    }
}