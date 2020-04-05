import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Food } from 'src/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  GetAllFoods(){
    return this.http.get("http://localhost:3000/api/foods");
  }

  GetFoodByID(id){
    return this.http.get("http://localhost:3000/api/foods/" + id);
  }
  AddFood(food:Food){
    return this.http.post("http://localhost:3000/api/foods",food);
  }
  DeleteFood(id){
    return this.http.post("http://localhost:3000/api/foods/delete",{"id":id});
  }


}
