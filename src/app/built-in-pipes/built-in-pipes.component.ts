import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
angularPipes:string='use pipes to format data in angular templates';
employee={name:"John", age:30, city:"New York"};
currentDate:Date=new Date();
number:number=45.878877;
items=of(["apple","orange","pineapple"]);

mobileNumber:any=9876543212;
}

