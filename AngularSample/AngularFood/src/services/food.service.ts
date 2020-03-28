import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  GetAllFoods(){
    return this.http.get("http://localhost:3000/api/foods");
  }

}
