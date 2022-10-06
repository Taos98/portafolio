import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  content: any = [];
  education: any = {};
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.setData();
    }
      , 3000);
  }

  setData() {
    this.loading = true;
    this.content = [
      {
        header: 'Hola Mundo',
        text: '123',
        
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
    ];
    this.education = {
      header: 'Universidad del Bío-Bío',
      text: 'Ingeniería de Ejecución en Computación e Informática',
      subHeader: '[2016 - 2022]',
      info: 'Egresado, actualmente trabajando en una empresa de desarrollo de software de un CMS para la gestión de contenidos de múltiples empresas.',
      image: 'https://ubiobio.cl/w/img/Escudo-UBB.svg',
      ImageStyle: {
        'width': '60%',
        'height': '60%',
        'margin-top': '2em',
      }
    };
    this.loading = false;
  }
}