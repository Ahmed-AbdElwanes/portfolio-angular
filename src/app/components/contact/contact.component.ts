import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initializeScrollAnimations();
  }
}
