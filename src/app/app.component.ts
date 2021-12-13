import { Component } from '@angular/core';
import * as styles from '../hannes.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'styles-test';
  constructor() {
    console.log(styles);
  }
}
