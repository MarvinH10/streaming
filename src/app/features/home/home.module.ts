import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
  ],
  exports: [
    HeroComponent,
    AboutComponent,
  ],
})
export class HomeModule {}
