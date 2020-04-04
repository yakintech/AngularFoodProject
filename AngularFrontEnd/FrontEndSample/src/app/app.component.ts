import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    ayidurum = true;
  // ayisrc = 'ayi.jpg';

  // Degis() {
  //   if (this.ayisrc == "kutupayi.jpg") {
  //     this.ayisrc = "ayi.jpg"
  //   }
  //   else {
  //     this.ayisrc = "kutupayi.jpg"
  //   }

  // }

  Degis(){
    this.ayidurum = !this.ayidurum;
  }
}



