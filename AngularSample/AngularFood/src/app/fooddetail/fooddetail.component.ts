import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("HELLO ROUTER")
  }

}
