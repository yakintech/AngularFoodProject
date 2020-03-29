import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personals:any[] = [];
  constructor(private personalservice:PersonalService) { }

  ngOnInit(): void {
    this.personalservice.GetAll().subscribe((veri:any) => {
      this.personals = veri;
    })
  }

}
