import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from 'src/services/personal.service';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {

  id:any;
  personal:any;
  constructor(private route:ActivatedRoute, private _personalservice:PersonalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this._personalservice.GetByID(this.id).subscribe((data:any)=>{
      this.personal = data;
      console.log(this.personal)
    })

  }

  

}
