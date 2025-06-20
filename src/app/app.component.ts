import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesNgIfVsIfComponent } from "./structural-directives-ng-if-vs-if/structural-directives-ng-if-vs-if.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectivesNgIfVsIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular learning';
}
