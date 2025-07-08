import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.initializeScrollAnimations();
  }
}
