import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../environments/environment";

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {
    protected url: string;
    protected header: Headers;

    constructor(protected http: Http) {
        this.setAccessToken();
    }

    request() {
        return this.http;
    }

    getUser() {
        return this.builder('auth/me')
            .list();
    }

    setAccessToken() {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkZDQyOTU3ZjliYjg1ZTI1YmUwMWMwOWEwMmMyNDc1YTM1MmRmNzQ1MGUxY2Q5NGJjNzkwNjg0MTc3ZmRiYTE2YTJmOTQ0OWFlM2UyNjJkIn0.eyJhdWQiOiIzIiwianRpIjoiOGRkNDI5NTdmOWJiODVlMjViZTAxYzA5YTAyYzI0NzVhMzUyZGY3NDUwZTFjZDk0YmM3OTA2ODQxNzdmZGJhMTZhMmY5NDQ5YWUzZTI2MmQiLCJpYXQiOjE1MjMyMTE4ODksIm5iZiI6MTUyMzIxMTg4OSwiZXhwIjoxNTU0NzQ3ODg4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.efyJALDUPutH2Rbn9zWfkB_qabi1RREaqQ_Tmv-vrTxgeADzr4d0aG1cUPwHAMPwzL2zEcXCbzV3nQmqGRkrCJ7Kk6cF4nhqoNEXObAd6pFdF0vzyZxx2BKwQdqkyOHFkS3NfdT9ieQyiCgV-iggMtxgAxYvg_0Mji0aQuKx_N7yXVVMKBKXNRfCRFnZruBF4G-yFKNXXMoIdBrLOtSvjx8tD0FeLs2ZCX3lM4ClwtN3JmVWFkd65TOlcGPOslYijwTy6d3WVnb17-5xns5soKeTf5-DYXNNwhSN3p_wWut6cRYB3OJcgY0LEofMEHbZLDGQpc-qRkBxNUqC_ZBkRCdWB5oGXA1TUNCcugOBWBtb75_cez0KJncABcSwcoS4kOqZceuB9XfIHqM-sp-20pzdhP0C-uA2oVdrusvrW7gcay892thMg7HpS4DEcZJKkauvHka_SjWGvOFezhBIO6026Q4kbPBYtYBlst9GtRne-3WSzn09BK7Id6PmacxbslP2tmoMXP95TNS6MYUlAvtSvdTBRYZogu3iNtIBg9DE1r0oeHweUGIm7ruu17RelV5PS1_cIx1pFuv1w3nZEbaXXVdGhlaqMxA_IqTuEEsBcrDBMHRdmIn7SXyY-7tX0OfzYhg67t-_QIMUPAueXUv1BRfHtL1SWZ26tHs9kbM';
        this.header = new Headers({'Authorization': 'Bearer ' + token, 'Accept': 'application/json'});
    }

    builder(resource: string) {
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }

    list(options: Object = {}) {
        return this.http.get(this.url, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    view(id: number) {
        return this
            .http
            .get(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    update(id: number, data: object) {
        return this
            .http
            .put(this.url + '/' + id, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    insert(data) {
        return this
            .http
            .post(this.url, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
}
