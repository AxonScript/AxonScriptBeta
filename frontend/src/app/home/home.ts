import { Component } from '@angular/core';
import { NavBar } from '../components/nav-bar/nav-bar';
import { Hero } from '../components/hero/hero';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBar, Hero],
  template: ` <div class="container">
    <app-nav-bar />
    <app-hero />
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
