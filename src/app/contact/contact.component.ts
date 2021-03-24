import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  styles: [],
})
export class ContactComponent implements OnInit {

  firstname = '';
  surename = '';
  adress = '';
  email = '';
  messages = '';

  // Maps
  latitude = '';
  longitude = '';
  locationChosen = false;

  onChoseLocation(event: any){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message = ` 
                    My Name is ${this.firstname}. 
                    My email is ${this.email}. 
                    My Message is ${this.messages}
                    
                    `;
    // grab all the fields and their values
    alert(message)
  }

}
