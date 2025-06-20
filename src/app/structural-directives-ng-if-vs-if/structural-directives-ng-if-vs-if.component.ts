import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives-ng-if-vs-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives-ng-if-vs-if.component.html',
  styleUrl: './structural-directives-ng-if-vs-if.component.scss',
})
export class StructuralDirectivesNgIfVsIfComponent {
  isButtonClicked: boolean = false;
  isTextEnabled: boolean = true;
  input1:string="";
  input2:string="";

  buttonClicked() {
    this.isButtonClicked = !this.isButtonClicked;
  }

  isShow(){
    this.isTextEnabled=true;
  }

  isHide(){
    this.isTextEnabled=false;
  }
}
