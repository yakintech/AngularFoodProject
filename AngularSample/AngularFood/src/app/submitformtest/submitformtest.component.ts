import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-submitformtest',
  templateUrl: './submitformtest.component.html',
  styleUrls: ['./submitformtest.component.css']
})
export class SubmitformtestComponent implements OnInit {

  constructor(private _contactservice:ContactService) { }

  ngOnInit(): void {
  }

  register(form) {

    console.log(form.value);  

    this._contactservice.SendContact2(form.value).subscribe((data:any) => {

      console.log("Success!!");
      
    })


  }

}
