import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  user = {
    name: 'Sascha',
    age: 25,
  }

  tooltip = 'Ich bin eine Link'

  inlineStyles = {
    width: '50%',
    background: 'yellow'
  }

  cssClass = 'blue'

  withtext = 50;

  somedate = new  Date();
}


