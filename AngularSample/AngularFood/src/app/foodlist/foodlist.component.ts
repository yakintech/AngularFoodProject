import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foods:any[]=[];
  constructor(private _foodservice:FoodService) { 

  }

  ngOnInit(): void {
    this._foodservice.GetAllFoods().subscribe((veri:any) => {
      this.foods = veri;
    })
  }

  Delete(id:any){
    this._foodservice.DeleteFood(id).subscribe((veri:any)=>{
      alert("Silme işlemi başarılı!");
   
    })
  }

}
