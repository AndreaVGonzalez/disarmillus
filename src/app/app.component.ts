import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Disarm';
  subtitle= 'Zines e ilustraciones'

  productoImg = "/assets/zine-uno.jpg";
  productoCategoria= "Zines";
  productoDescripcion= "Loren Ipsum";

}
