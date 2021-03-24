import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teams=[
    {'id':1, 'name': 'Kha', 'jobs': 'CEO', 'image':'../../assets/picture.png'},
    {'id':2, 'name': 'Francesco', 'jobs': 'CFO', 'image':'../../assets/picture.png'},
    {'id':3, 'name': 'Fokko', 'jobs': 'CTO', 'image':'../../assets/picture.png'},
    {'id':4, 'name': 'Kevin', 'jobs': 'Programming', 'image':'../../assets/picture.png'},
    {'id':5, 'name': 'Matze', 'jobs': 'Programming', 'image':'../../assets/picture.png'},
    {'id':6, 'name': 'Jona', 'jobs': 'Sales Director', 'image':'../../assets/picture.png'},
    {'id':7, 'name': 'Benni', 'jobs': 'Conception', 'image':'../../assets/picture.png'},
    {'id':8, 'name': 'Jessi', 'jobs': 'Designer', 'image':'../../assets/picture.png'},
    {'id':9, 'name': 'Mikki', 'jobs': 'Designer', 'image':'../../assets/picture.png'},
  ]

}
