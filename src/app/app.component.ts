import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgswitchVsSwitchComponent } from "./ngswitch-vs-switch/ngswitch-vs-switch.component";
import { AttributeDirectiveComponent } from "./attribute-directive/attribute-directive.component";
import { SignalsComponent } from "./signals/signals.component";
import { LinkedSignalsComponent } from "./linked-signals/linked-signals.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkedSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular learning';
}
