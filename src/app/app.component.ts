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
}
