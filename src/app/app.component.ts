import { Component } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    HomeModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'streaming-app';
}
