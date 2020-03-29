import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from 'src/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  SendContact(model:Contact){
    return this.http.post("http://localhost:3000/api/contact",model);
  }
}
