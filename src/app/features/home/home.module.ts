import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [
    CommonModule,
    HeroComponent,
  ],
  exports: [
    HeroComponent,
  ],
})
export class HomeModule {}
