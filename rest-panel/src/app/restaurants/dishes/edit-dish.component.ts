import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import {Router} from "@angular/router";

@Component({
    selector: 'app-edit-dish',
    templateUrl: './edit-dish.component.html'
})
export class EditDishComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');
    }
}