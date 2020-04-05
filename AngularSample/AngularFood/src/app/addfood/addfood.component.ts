import { Component, OnInit } from '@angular/core';
import { Food } from 'src/models/Food';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  food:Food = new Food();
  constructor(private _foodservice:FoodService) { }

  ngOnInit(): void {
  }


  AddFood(){
    if(this.food.title != "" && this.food.description != ""){
      this._foodservice.AddFood(this.food).subscribe((veri:any) => {
        alert("İşlem başarılı!!");
      })
    }
    else{
      alert("Lütfen başlık ve açıklamayı doldur. PLSSSSSSSSSSS")
    }

  }

}
