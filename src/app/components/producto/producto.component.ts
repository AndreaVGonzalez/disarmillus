import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  @Input() img: string;
  @Input() categoria: string;
  @Input() descripcion: string;

  ngOnInit(): void {
  }

}
