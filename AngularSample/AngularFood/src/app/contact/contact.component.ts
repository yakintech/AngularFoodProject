import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';
import { Contact } from 'src/models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();
  constructor(private contactservice:ContactService) { 

  }

  ngOnInit(): void {
  }


  Send(){
    this.contactservice.SendContact(this.contact).subscribe(() => {
      alert("Mesajınız başarıyla gönderilmiştir!")
    });
  }

}
