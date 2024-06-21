import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningWheelComponent } from "./spinning-wheel/spinning-wheel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SpinningWheelComponent]
})
export class AppComponent {
  title = 'Assessment';
}
