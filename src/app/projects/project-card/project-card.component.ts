import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare let VanillaTilt: any;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    VanillaTilt.init(this.elementRef.nativeElement.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }
}
