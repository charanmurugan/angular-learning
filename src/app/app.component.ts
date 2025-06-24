import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesNgIfVsIfComponent } from "./structural-directives-ng-if-vs-if/structural-directives-ng-if-vs-if.component";
import { StructuralDirectivesNgForVsForComponent } from "./structural-directives-ng-for-vs-for/structural-directives-ng-for-vs-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectivesNgIfVsIfComponent, StructuralDirectivesNgForVsForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular learning';
}
