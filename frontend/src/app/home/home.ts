import { Component } from '@angular/core';
import { NavBar } from '../components/nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBar],
  template: ` <div class="container">
    <app-nav-bar />
  </div>`,
  styles: `
    .container{
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color:var(--home-bg);
    }
  `,
})
export class Home {}
