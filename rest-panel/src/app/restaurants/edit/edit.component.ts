import {Component, OnInit} from '@angular/core';
import {AppHttpService} from "../../app-http.service";
import {RestaurantService} from "../restaurant.service";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    dragging: boolean = false;
    restaurant: any = {};
    address: any = {};

    constructor(
        protected appHttpService: AppHttpService,
        protected httpService: RestaurantService
    ) {
    }

    ngOnInit() {
        this.appHttpService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                this.httpService.builder()
                    .view(id)
                    .then((res) => {
                        this.restaurant = res;
                        this.address = res.address || {};
                        window.Materialize.updateTextFields();
                    })
            });
    }

    upload(e) {
        e.preventDefault();

        let image_url = e.dataTransfer.files[0];
        let formData = new FormData();
        formData.append('photo', image_url);

        this.httpService.builder()
            .upload(this.restaurant.id + '/upload', formData);
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }

    searchCep() {
        let cep = this.address.cep || null;
        if (cep && cep.length === 8) {
            this.httpService.getCep(cep)
                .then((res) => {
                    this.address.address = res.logradouro;
                    this.address.city = res.localidade;
                    this.address.neighborhood = res.bairro;
                    this.address.state = res.uf;
                });
        }
    }

    save(e) {
        e.preventDefault();
        this.httpService.builder()
            .update(this.restaurant.id, this.restaurant)
            .then(() => {
                return this.httpService.builder('/' + this.restaurant.id + '/address')
                    .insert(this.address);
            }).then(() => {
                window.Materialize.toast('Salvo com sucesso.', 3000);
        });
    }


}
