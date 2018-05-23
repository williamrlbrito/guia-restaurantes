import { Component } from "@angular/core";
import * as jQuery from 'jquery';
import { AppHttpService } from "../../app-http.service";

@Component({
    selector: 'app-restaurants-describe',
    templateUrl: './restaurant-describe.component.html'
})
export class RestaurantDescribeComponent {

    constructor(private appHttpService: AppHttpService){}

}
