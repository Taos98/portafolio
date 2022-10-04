import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  content: any = [
    {
      header: 'Hola Mundo',
      text: '123'
    },
    {
      header: 'Hola Mundo 2',
      text: '1233'
    },
    {
      header: 'Hola Mundo 3',
      text: '12334'
    },
    {
      header: 'Hola Mundo 4',
      text: '123345'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}