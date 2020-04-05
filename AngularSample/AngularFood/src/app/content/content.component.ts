import { Component, OnInit } from '@angular/core';
import {FoodService} from 'src/services/food.service';
import {Food} from '../../models/Food'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  foods:Food[] = [];
  constructor(private _foodservice:FoodService) { 

  }

  ngOnInit(): void {
    
    this._foodservice.GetAllFoods().subscribe((data:any) => {
            this.foods = data;

    })

  }


}
