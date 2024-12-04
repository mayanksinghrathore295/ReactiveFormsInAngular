import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
