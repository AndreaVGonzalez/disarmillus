import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor() { }

 productos = [
   {
   titulo: "Zine #1",
   img: "/assets/zine-uno.jpg",
   descripcion: "Loren ipsum",
   },
   {
   titulo: "Zine #2",
   img: "/assets/zine-uno.jpg",
   descripcion: "Loren ipsum",
   },
   {
   titulo: "Zine #3",
   img: "/assets/zine-uno.jpg",
   descripcion: "Loren ipsum",
   },
  ]

  productdos = [

   {
   titulo: "Zine #4",
   img: "/assets/zine-uno.jpg",
   descripcion: "Loren ipsum",
   },
   {
   titulo: "Zine #5",
   img: "/assets/zine-uno.jpg",
   descripcion : "Loren ipsum",
   },
   {
   titulo: "Zine #6",
   img: "/assets/zine-uno.jpg",
   descripcion: "Loren ipsum",
   },
 ];

  ngOnInit(): void {
  }

}
