import { Component } from "@angular/core";
import * as jQuery from 'jquery';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
    ngOnInit(){
        jQuery('.parallax').parallax();
    }

    search(e){
        e.preventDefault();
    }
}
