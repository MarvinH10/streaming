import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'streaming-app';
}
