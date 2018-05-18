import { Injectable, EventEmitter } from "@angular/core";
import { AppHttpService } from "../../app-http.service";

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

    changePassword(data: any){
        let observable = this.http.post(this.url + '/change-password', data, {headers: this.header});
        return observable.toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    editProfile(data: any){
        let observable = this.http.post(this.url + '/edit-profile', data, {headers: this.header});
        return observable.toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
}