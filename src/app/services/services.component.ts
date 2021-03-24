import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  service=[
    {'id':1, 'name': 'Game Developing', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/game.jpg'},
    {'id':2, 'name': 'Web Development', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/web.jpg'},
    {'id':3, 'name': '3D-Modelling', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/model.jpg'},
    {'id':4, 'name': 'Consulting', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/consul.jpg'}
  ]

}
