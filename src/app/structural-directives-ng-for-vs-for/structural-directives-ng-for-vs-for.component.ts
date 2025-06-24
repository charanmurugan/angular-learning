import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directives-ng-for-vs-for.component.html',
  styleUrl: './structural-directives-ng-for-vs-for.component.scss'
})
export class StructuralDirectivesNgForVsForComponent {
colors:any[]=[ 
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
cars:any[]=["Ford", "BMW", "Fiat"];
}
