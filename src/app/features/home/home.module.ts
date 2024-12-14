import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ContenidoComponent,
  ],
  exports: [
    HeroComponent,
    AboutComponent,
    ContenidoComponent,
  ],
})
export class HomeModule { }
