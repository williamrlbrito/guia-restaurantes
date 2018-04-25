import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-dish',
    templateUrl: './new-dish.component.html'
})
export class NewDishComponent implements OnInit{
    constructor(private router: Router) {
    }
    ngOnInit(){
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');
    }
}