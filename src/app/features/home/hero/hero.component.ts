import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'appHero',
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  slides = [0, 1, 2];
  currentIndex = 0;

  constructor(library: FaIconLibrary) {
    library.addIcons(faPlay);
  }

  goToSlide(index: number) {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    this.currentIndex = index;
    track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  onWatchNow() {
    alert('Redirigiendo a la página de la serie...');
  }
}
