import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Events';

  color = 'blue'

  changColor(newColor: string) {
    this.color = newColor;
  }

  changColorr(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Meine ausgabe',target.value)
  }

}
