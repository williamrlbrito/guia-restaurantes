import { Injectable,  EventEmitter } from '@angular/core';
import { AppHttpService } from '../../app-http.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DishesService extends AppHttpService {
    eventEmitter: EventEmitter<any> = new EventEmitter;

    builder(resource: string = '') {
        return super.builder('dishes' + resource);
    }

    update(id: number, data: object) {
        let observable = this.http.post(this.url + '/' + id, data, {headers: this.header})
        return this.toPromise(observable);
    }
}