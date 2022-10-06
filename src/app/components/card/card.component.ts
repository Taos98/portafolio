import { Component, OnInit, Input } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() content: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.content)
  }

}

