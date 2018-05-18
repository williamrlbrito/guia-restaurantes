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
}