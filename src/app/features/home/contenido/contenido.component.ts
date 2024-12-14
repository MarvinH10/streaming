import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'appContenido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent {
  movies = [
    {
      title: 'Robot Salvaje',
      year: 2024,
      image: 'https://cinetux.top/wp-content/uploads/2024/10/sDoXpaKZmrzCSJH63zZvQQ9A7VK-160x240.jpg',
      description: 'El épico viaje de un robot que naufraga.',
      director: 'Chris Sanders',
      genre: ['Animación', 'Ciencia Ficción', 'Familia'],
    },
    {
      title: 'Smile 2',
      year: 2024,
      image: 'https://cinetux.top/wp-content/uploads/2024/10/mvoODLydq9vB4ikflyHaNVsAfKj-160x240.jpg',
      description: 'Una estrella pop enfrenta sus miedos.',
      director: 'Anthony Pettine',
      genre: ['Misterio', 'Terror'],
    },
    {
      title: 'Terrifier 3',
      year: 2024,
      image: 'https://cinetux.top/wp-content/uploads/2024/10/iaGfB2itLC8exBvfLUoadS0Q6tP-160x240.jpg',
      description: 'Secuela de "Terrifier 2" ambientada en Navidad.',
      director: 'Damien Leone',
      genre: ['Suspense', 'Terror'],
    },
  ];
}
