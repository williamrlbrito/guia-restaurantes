import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../environments/environment";
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {
    protected url: string;
    protected header: Headers;

    constructor(protected http: Http, private router: Router) {
        this.setAccessToken();
    }

    request() {
        return this.http;
    }

    setAccessToken() {
        let token = 'yJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkMjY0N2U4NDhjNTdmMWMxZWE5ZGZmMDYzMGQ4MGQzZTRkNmU3MGE0M2M0NmIxYjlhNTdkMjZmZjFkZWJjOTlkYzc0MmM0MzFlZjIyYTIwIn0.eyJhdWQiOiIxIiwianRpIjoiN2QyNjQ3ZTg0OGM1N2YxYzFlYTlkZmYwNjMwZDgwZDNlNGQ2ZTcwYTQzYzQ2YjFiOWE1N2QyNmZmMWRlYmM5OWRjNzQyYzQzMWVmMjJhMjAiLCJpYXQiOjE1MjY0OTk5NzIsIm5iZiI6MTUyNjQ5OTk3MiwiZXhwIjoxNTU4MDM1OTcyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.SpphqC9EAHDEQCY1ST-JAQio3_SljtmEFblGW1f-IE3C8EX4Oh55iMjvr7OxZ-46vQrlJF5IIE6wLKpiTub68Zl6aEwadFaFJcPuJ4An4dFh4JD7-A09-TFu8cf2SG4dsl3w2K1u1ie_uRpDftJ9u9EP5bFZqe5B9QdksHJlNJy24VE-Am0-vaQ_r8EhD5xUWz_6sSggRaCShxdeFkvYFTMGcrWmLG4diBpKbXrVduUOcnihxHRJR068g7_Dg-oIB0DdxU3PBNrDeW7qN_s8wSU5-Ik1gA88L11s-EGR2BGHOmCjsd1a-7iXm0UT4ckseVbUrU-zFWduMu4teEkLvWCNck7J8CFhp6M4KdHVhwalXq1v358-BlqvfymagW-Yef2tvNinEp5cJx_qVap7RKHzILLPBhp9idTw05UwyLuY2hrZyv_0OEdGNCGAqwSx7DrKUd1tvptPFig5Pwd9fgmBPiVoxh90TGG6mYjUJfEYScmbf_fpDv8-iZDiUoWX8ONUKm2398uNGDKLajiw85OunrELS1js9Or8PTOc12gMmqhRtt_oqQzLXEW_8-78HL8xMCchSQhwsghtreQ1KTrHTp9h7R_kmq_LNICqRE3a9b1UPcja3CCH6-wkP4TNwQP8wNIgpEX7AGw31fWyrrKyMCR-2LeDqwQNedwdlEo';
        this.header = new Headers({'Authorization': 'Bearer ' + token, 'Accept': 'application/json'});
    }

    builder(resource: string) {
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }

    list(options: any = {}) {
        let url = this.url;
        if (options.filters !== undefined) {
            let filters = options.filters;
            filters.forEach((item, index) => {
                let field = Object.keys(item)[0];
                let value = item[field];
                url = url + '?where[' + field + ']=' + value;
            });
        }
        
        let observable = this.http.get(url, {headers: this.header})
        return this.toPromise(observable);    
    }

    view(id: number) {
        let observable = this.http.get(this.url + '/' + id, {headers: this.header})
        return this.toPromise(observable);
    }

    update(id: number, data: object) {
        let observable = this.http.put(this.url + '/' + id, data, {headers: this.header})
        return this.toPromise(observable);
    }

    insert(data: object) {
        let observable = this.http.post(this.url, data, {headers: this.header})
        return this.toPromise(observable);
    }

    delete(id: number) {
        let observable = this.http.delete(this.url + '/' + id, {headers: this.header});
        return this.toPromise(observable);
    }

    protected toPromise(request) {
        return request.toPromise()
            .then((res) => {
                return res.json() || {}
            })
            .catch((err) => {
                let message = 'Algo deu errado no servidor, informe o erro ' + err.status + ' ao administrador';
                if (err.status === 401) {
                    message = 'Você não tem permissão para ver isso, informe um usuário e senha válidos';
                    this.router.navigate(['/login']);
                }

                if (err.status === 422) {
                    message = 'Falha de validação, verifique os campos';
                }

                if (err.status === 404) {
                    message = 'Impossível se conectar ao servidor, verifique sua conexão ou tente novamente em alguns minutos';
                }

                window.Materialize.toast(message, 3000, 'red');
            });
    }
}
