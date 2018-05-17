import {Component, OnInit} from '@angular/core';
import {AppHttpService} from "../../app-http.service";
import {RestaurantService} from "../restaurant.service";
import * as jQuery from 'jquery';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    dragging: boolean = false;
    restaurant: any = {};
    photos: any = [];
    address: any = {};
    upload_status: string = 'not';
    restaurantPhoto: any = null;

    constructor(
        protected appHttpService: AppHttpService,
        protected httpService: RestaurantService
    ) {}

    ngOnInit() {
        this.appHttpService
            .getUser()
            .then((res) => {
                let id = res.restaurant.id;
                this.httpService
                    .builder()
                    .view(id)
                    .then((res) => {
                        this.restaurant = res;
                        this.address = res.address || {};
                        window.Materialize.updateTextFields();

                        return this.httpService
                            .builder('/' + this.restaurant.id + '/photos')
                            .list();
                    })
                    .then((res) => {
                        this.photos = res;
                        this.materialBoxStart();
                    });
            });
    }

    upload(e) {
        e.preventDefault();

        let image_url: any = null;
        if (e.dataTransfer) {
            image_url = e.dataTransfer.files[0];
        } else {
            image_url = e.target.files[0]; 
        }
        
        this.upload_status = 'sending';

        let formData = new FormData();
        formData.append('photo', image_url);

        this.httpService
            .builder()
            .upload(this.restaurant.id + '/upload', formData)
            .then(() => {
                this.upload_status = 'success';
            })
            .catch(() => {
                this.upload_status = 'error';
            });
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }

    searchCep() {
        let cep = this.address.cep || null;
        if (cep && cep.length === 8) {
            this.httpService
                .getCep(cep)
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
        this.httpService
            .builder()
            .update(this.restaurant.id, this.restaurant)
            .then(() => {
                return this.httpService
                    .builder('/' + this.restaurant.id + '/address')
                    .insert(this.address);
            }).then(() => {
                window.Materialize.toast('Salvo com sucesso.', 3000);
            });
    }

    preparePhoto(e){
        let image_url = e.target.files[0];
        let formData = new FormData();
        formData.append('restaurant_id', this.restaurant.id);
        formData.append('url', image_url);
        this.restaurantPhoto = formData;
    }

    sendPhoto(){
        if (this.restaurantPhoto === null) {
            window.Materialize.toast('Selecione uma imagem antes', 3000, 'red');
            return;
        }

        this.httpService
            .builder()
            .upload('photos', this.restaurantPhoto)
            .then(() => {
                return this.httpService
                    .builder('/' + this.restaurant.id + '/photos')
                    .list();
            })
            .then((res) => {
                this.photos = res;
                this.materialBoxStart();
            });
    }

    deletePhoto(photo){
        this.httpService
            .builder('/photos')
            .delete(photo.id)
            .then(() => {
                return this.httpService
                    .builder('/' + this.restaurant.id + '/photos')
                    .list();
            })
            .then((res) => {
                this.photos = res;
                this.materialBoxStart();
            });
    }

    private materialBoxStart() {
        setTimeout(() => jQuery('.materialboxed').materialbox(), 1000);
    }
}
