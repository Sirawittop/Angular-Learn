import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patiwat : https://github.com/pppatiwatt';
  imageConverURL = '/images/patiwat.jpeg'

  onImageClick() {
    alert("pppatiwatt")
  }

  major = 'Programmer';

  items = [
    { name: 'Angular', url: 'https://angular.io' },
    { name: 'React', url: 'https://reactjs.org' },
    { name: 'Vue', url: 'https://vuejs.org' }
  ];

  skill = "Basic"

  now = new Date();

  number = 5555.5555;

  product = [
    { id: 1, name: "T Shirt", size: "M", price: 330, releaseDate: new Date() },
    { id: 2, name: "Polo Shirt", size: "L", price: 500.5, releaseDate: new Date() },
    { id: 3, name: "Jeans", size: "XL", price: 1000, releaseDate: new Date() },
    { id: 4, name: "Short", size: "M", price: 200.3, releaseDate: new Date() },
    { id: 5, name: "Shoes", size: "M", price: 1500, releaseDate: new Date() }
  ];

}
