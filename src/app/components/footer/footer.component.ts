import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

declare var particlesJS: any;
@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
// export class FooterComponent implements AfterViewInit {
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       if (typeof particlesJS !== 'undefined') {
//         particlesJS('footer-particles', {
//           particles: {
//             number: {
//               value: 40,
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//             },
//             color: {
//               value: '#FFD700',
//             },
//             shape: {
//               type: 'star',
//             },
//             opacity: {
//               value: 0.6,
//               random: true,
//             },
//             size: {
//               value: 4,
//               random: true,
//             },
//             line_linked: {
//               enable: false,
//             },
//             move: {
//               enable: true,
//               speed: 3,
//               direction: 'none',
//               random: true,
//               straight: false,
//               out_mode: 'out',
//             },
//           },
//           interactivity: {
//             detect_on: 'canvas',
//             events: {
//               onhover: {
//                 enable: true,
//                 mode: 'bubble',
//               },
//               onclick: {
//                 enable: true,
//                 mode: 'push',
//               },
//               resize: true,
//             },
//             modes: {
//               bubble: {
//                 distance: 200,
//                 size: 6,
//                 duration: 2,
//                 opacity: 0.8,
//               },
//               push: {
//                 particles_nb: 3,
//               },
//             },
//           },
//           retina_detect: true,
//         });
//       } else {
//         console.error(
//           'particlesJS is not defined. Ensure particles.js is loaded.'
//         );
//       }
//     }
//   }
// }

//
//
//
//
export class FooterComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // إضافة تأخير بسيط لضمان تحميل السكربت
      setTimeout(() => {
        if (typeof particlesJS !== 'undefined') {
          particlesJS('footer-particles', {
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#FFD700',
              },
              shape: {
                type: 'star',
              },
              opacity: {
                value: 0.6,
                random: true,
              },
              size: {
                value: 4,
                random: true,
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                },
                push: {
                  particles_nb: 3,
                },
              },
            },
            retina_detect: true,
          });
        } else {
          console.error(
            'particlesJS is not defined. Ensure particles.js is loaded.'
          );
        }
      }, 300); // تأخير 100 ميلي ثانية
    }
  }
}

// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// declare var particlesJS: any;

// @Component({
//   selector: 'app-footer',
//   standalone: false,
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent implements AfterViewInit {

// }
