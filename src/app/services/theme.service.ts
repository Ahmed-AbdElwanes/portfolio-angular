import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  initializeTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.getElementById('theme-body')?.classList.add('dark');
      document
        .querySelector('#theme-toggle i')
        ?.classList.replace('fa-moon', 'fa-sun');
    } else {
      document.getElementById('theme-body')?.classList.remove('dark');
      document
        .querySelector('#theme-toggle i')
        ?.classList.replace('fa-sun', 'fa-moon');
    }
  }

  toggleTheme() {
    const body = document.getElementById('theme-body');
    const icon = document.querySelector('#theme-toggle i');
    if (body?.classList.contains('dark')) {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      icon?.classList.replace('fa-sun', 'fa-moon');
    } else {
      body?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      icon?.classList.replace('fa-moon', 'fa-sun');
    }
  }
}
