import { Injectable, EventEmitter } from "@angular/core";
import { AppHttpService } from "../../app-http.service";

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
}