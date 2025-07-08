import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initializeScrollAnimations() {
    if (isPlatformBrowser(this.platformId)) {
      const cards = document.querySelectorAll(
        '.project-card, .contact-card, .timeline-item'
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                'animate__animated',
                'animate__fadeInUp'
              );
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => observer.observe(card));
    }
  }
}
