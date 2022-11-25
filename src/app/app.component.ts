import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  homepage = true;
  imagePath = '/assets/logo-salu.png';
  setHome(){
    this.homepage = !this.homepage
  }
}
