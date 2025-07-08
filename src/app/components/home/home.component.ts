import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { isPlatformBrowser } from '@angular/common';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typingElement') typingElement!: ElementRef;
  names = ['Software Engineer', 'Frontend Developer', 'Ahmed Abdelwanes'];
  index = 0;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeParticles();
      this.startTypingAnimation();
      this.scrollService.initializeScrollAnimations();
    }
  }

  initializeParticles() {
    setTimeout(() => {
      if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
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
    }, 200);
  }
  startTypingAnimation() {
    const ele = this.typingElement.nativeElement;
    ele.classList.remove('typing-effect');
    void ele.offsetWidth; // Trigger reflow
    ele.innerText = this.names[this.index];
    ele.classList.add('typing-effect');
    this.index = (this.index + 1) % this.names.length;
    setTimeout(() => this.startTypingAnimation(), 3000);
  }
}

//
//
//
// import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
// import { ScrollService } from '../services/scroll.service';
// import { isPlatformBrowser } from '@angular/common';

// declare var particlesJS: any;

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements AfterViewInit {
//   @ViewChild('typingElement') typingElement!: ElementRef;
//   names = ['Software Engineer', 'Frontend Developer', 'Ahmed Abdelwanes'];
//   index = 0;

//   constructor(
//     private scrollService: ScrollService,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngAfterViewInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       this.initializeParticles();
//       this.startTypingAnimation();
//       this.scrollService.initializeScrollAnimations();
//     }
//   }

//   initializeParticles() {
//     if (typeof particlesJS !== 'undefined') {
//       particlesJS('particles-js', {
//         particles: {
//           number: { value: 80, density: { enable: true, value_area: 800 } },
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

//   startTypingAnimation() {
//     const ele = this.typingElement.nativeElement;
//     ele.classList.remove('typing-effect');
//     void ele.offsetWidth; // Trigger reflow
//     ele.innerText = this.names[this.index];
//     ele.classList.add('typing-effect');
//     this.index = (this.index + 1) % this.names.length;
//     setTimeout(() => this.startTypingAnimation(), 3000);
//   }
// }
