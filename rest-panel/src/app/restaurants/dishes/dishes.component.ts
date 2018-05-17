import { Component, OnInit } from '@angular/core';
import { DishesService } from './dishes.service';
import { AppHttpService } from '../../app-http.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html'
})
export class DishesComponent implements OnInit{
    constructor(
        private appHttpService: AppHttpService,
        private httpService: DishesService
    ){}
    ngOnInit(){}
}