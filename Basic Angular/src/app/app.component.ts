import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe, DecimalPipe, ReactiveFormsModule],
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

  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  profileFormSubmit() {
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }



  constructor(private http: HttpClient) {
  }


  service_path = "https://669345dec6be000fa07a76ef.mockapi.io/todo/v1/topic"

  onGetAll() {
    console.log("--- onGetAll ---")

    let url = this.service_path
    this.http.get(url).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )

  }

  onGetById() {
    console.log("--- onGetById ---")

    let id = 1
    let url = `${this.service_path}/${id}`
    this.http.get(url).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )

  }

  onPost() {
    console.log("--- onPost ---")

    let url = this.service_path
    let body = { topic: "Angular" }

    this.http.post(url, body).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )

  }

  onPut() {
    console.log("--- onPut ---")

    let id = 11
    let url = `${this.service_path}/${id}`
    let body = { topic: "React" }

    this.http.put(url, body).subscribe(
      {
        next: (result) => {
          console.log(result)
        }
      }
    )


  }

  onDelete() {
    console.log("--- onDelete ---")

    let id = 11
    let url = `${this.service_path}/${id}`
    this.http.delete(url).subscribe(
      {
        next: (result) => {
          console.log(result)
        },
        error: (err) => {
          console.log(err.error)
          alert(`${id} ${err.error}`)
        }
      }
    )
  }


}
