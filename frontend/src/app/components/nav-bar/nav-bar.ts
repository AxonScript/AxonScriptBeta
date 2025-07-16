import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  theme_toggle() {
    const body = document.body;
    const currentTheme: any = body.getAttribute('theme');
    const theme_toggle_btn: any = document.getElementById('theme-toggle-btn');

    if (currentTheme == 'dark') {
      theme_toggle_btn.innerHTML = `
        <img src="/dark-theme-icon.png" alt="dark-theme-icon" height="25rem" />
    `;
      body.setAttribute('theme', 'light');
    } else {
      theme_toggle_btn.innerHTML = `
        <img src="/light-theme-icon.png" alt="light-theme-icon" height="25rem" />
    `;
      body.setAttribute('theme', 'dark');
    }
  }
}
