import { Component } from "@angular/core";
import * as jQuery from 'jquery';
import { AppHttpService } from "../../app-http.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-restaurants-describe',
    templateUrl: './restaurant-describe.component.html'
})
export class RestaurantDescribeComponent {
    id: number;
    restaurants: any = {};
    dishes: any = {data: []};
    photos: any;
    viewPhone: boolean = false;
    vote: any = {points: '', comment: ''};

    constructor(
        private route: ActivatedRoute,
        private appHttpService: AppHttpService
    ){}

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = this.id = params['id'];
            let options = {
                filter: {
                    restaurant_id: id
                }
            }

            this.appHttpService.builder('restaurants')
                .view(id).then(res => this.restaurants = res);

            this.appHttpService.builder('dishes')
                .list(options).then(res => this.dishes = res);

            this.appHttpService.builder('restaurants/' + id + '/photos')
                .list().then(res => {
                    this.photos = res;
                    setTimeout(() =>{
                        jQuery('.materialboxed').materialbox();
                    });
                });
        });
    };

    showPhone(e) {
        e.preventDefault();
        if (!this.viewPhone){
            //
        }

        this.viewPhone = true;
    }

    addVote(e, vote) {
        e.preventDefault();
        jQuery('.modal').modal();
        jQuery('.modal').modal('open'); 
        this.vote.points = vote || '';
    }

    sendVote(e) {
        e.preventDefault();
        jQuery('.modal').modal('close');
        this.vote.restaurant_id = this.id;
    }

    classToVotes(vote) {
        if (this.restaurants.points >= vote) {
            return 'amber-text';
        }

        return 'black-text';
    }
}
