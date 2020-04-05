import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {
  fooddetail: any;
  id: any;
  constructor(private route: ActivatedRoute, private _foodservice: FoodService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this._foodservice.GetFoodByID(this.id).subscribe((veri: any) => {
      this.fooddetail = veri;
      console.log(this.fooddetail);
    })
  }

}
