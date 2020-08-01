import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  //title = "Disarm";
  //subtitle = "Zines e Ilustraciones"

  @Input() title:string;
  @Input() subtitle:string;

  ngOnInit(): void {
  }

}
