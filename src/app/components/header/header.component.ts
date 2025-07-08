import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  logoSrc: string = 'assets/media/imgs/logo-1.png';
  // @ViewChild('navMenu') navMenu!: ElementRef; // مرجع لعنصر الـ Navbar
  // @ViewChild('toggleButton') toggleButton!: ElementRef; // مرجع لزر

  constructor(private themeService: ThemeService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  //

  //

  toggleTheme() {
    this.themeService.toggleTheme();
    if (localStorage.getItem('theme') == 'dark') {
      this.logoSrc = 'assets/media/imgs/logo-1-dark.png';
    } else {
      this.logoSrc = 'assets/media/imgs/logo-1.png';
    }
  }
}
