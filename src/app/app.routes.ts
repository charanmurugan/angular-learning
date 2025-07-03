import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesNgForVsForComponent } from './structural-directives-ng-for-vs-for/structural-directives-ng-for-vs-for.component';
import { StructuralDirectivesNgIfVsIfComponent } from './structural-directives-ng-if-vs-if/structural-directives-ng-if-vs-if.component';
import { NgswitchVsSwitchComponent } from './ngswitch-vs-switch/ngswitch-vs-switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalsComponent } from './linked-signals/linked-signals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  // {path:'',component:UserComponent},
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'ngfor-vs-for', component: StructuralDirectivesNgForVsForComponent },
  { path: 'ngif-vs-if', component: StructuralDirectivesNgIfVsIfComponent },
  { path: 'ngSwitch-vs-switch', component: NgswitchVsSwitchComponent },
  { path: 'attribute-directive', component: AttributeDirectiveComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'linked-signals', component: LinkedSignalsComponent },
  { path: '**', component: PageNotFoundComponent },
];
