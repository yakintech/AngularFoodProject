import { Component, OnInit } from '@angular/core';
import {FoodService} from 'src/services/food.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private _foodservice:FoodService) { 

    
  }

  ngOnInit(): void {
  }

  Test(){
    this._foodservice.GetAllFoods().subscribe((data:any) => {
      console.log(data);
    })
  }

}
