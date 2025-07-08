import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

declare var particlesJS: any;
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeParticles();
      this.scrollService.initializeScrollAnimations();
    }
  }

  initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('journey-particles', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2, direction: 'none', random: false },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
          modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
      });
    } else {
      console.error(
        'particlesJS is not defined. Ensure particles.js is loaded.'
      );
    }
  }
}
// export class AboutComponent {

// }

//
//
//
//
// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { ScrollService } from '../services/scroll.service';
// import { isPlatformBrowser } from '@angular/common';

// declare var particlesJS: any;

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements AfterViewInit {
//   constructor(
//     private scrollService: ScrollService,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngAfterViewInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       this.initializeParticles();
//       this.scrollService.initializeScrollAnimations();
//     }
//   }

//   initializeParticles() {
//     if (typeof particlesJS !== 'undefined') {
//       particlesJS('journey-particles', {
//         particles: {
//           number: { value: 60, density: { enable: true, value_area: 800 } },
//           color: { value: '#ffffff' },
//           shape: { type: 'circle' },
//           opacity: { value: 0.5, random: true },
//           size: { value: 3, random: true },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: '#ffffff',
//             opacity: 0.4,
//             width: 1
//           },
//           move: { enable: true, speed: 2, direction: 'none', random: false }
//         },
//         interactivity: {
//           detect_on: 'canvas',
//           events: {
//             onhover: { enable: true, mode: 'repulse' },
//             onclick: { enable: true, mode: 'push' }
//           },
//           modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
//         },
//         retina_detect: true
//       });
//     } else {
//       console.error('particlesJS is not defined. Ensure particles.js is loaded.');
//     }
//   }
// }
