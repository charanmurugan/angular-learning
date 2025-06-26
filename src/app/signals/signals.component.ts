import { ChangeDetectionStrategy, Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  counter:WritableSignal<number>=signal(0);
  normalCounter:number=0;

  constructor(){
    setTimeout(()=>{
     this.normalCounter=60;
    //  this.counter.set(60);
     console.log("Normal Counter Value : ", this.normalCounter); 
    //  console.log("Counter Value : ", this.counter());         
    },5000)
    effect(()=>console.log("The value of counter is",this.counter()))

  }

  
  increment(){
    this.counter.update(intitalValue=>intitalValue+1);
  }


}
