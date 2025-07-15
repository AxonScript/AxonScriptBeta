import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home | AxonScript Programming Language',
  }, // Default route for Home page
  { path: '**', redirectTo: '' }, // Wildcard route to redirect unknown paths to Home
];
