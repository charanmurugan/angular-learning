import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgswitchVsSwitchComponent } from "./ngswitch-vs-switch/ngswitch-vs-switch.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NgswitchVsSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular learning';
}
