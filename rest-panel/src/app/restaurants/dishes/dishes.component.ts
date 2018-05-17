import { Component, OnInit } from '@angular/core';
import { DishesService } from './dishes.service';
import { AppHttpService } from '../../app-http.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html'
})
export class DishesComponent implements OnInit{
    constructor(
        private httpService: DishesService,
        protected authService: AppHttpService
    ){}
    ngOnInit(){
        this.authService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                let options = {
                    filters: [
                        {restaurant_id: id}
                    ]
                }
                this.httpService.builder()
                    .list(options);

            });
    }
}