import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {

  textColor:string='';

  setClass(textColor:string){
    this.textColor=textColor;
  }

  isTextColor:boolean=false;

  textColorInput:string='';

  styleColor:string="orange";

  updateColor(textColor:string){
    this.styleColor=textColor;
  }

  isStyleColor:boolean=false;

  myCustomClass:any={
    'color':'pink',
    'height':'150px',
    'width':"350px",
    'border':'5px dashed black'
  }
}

