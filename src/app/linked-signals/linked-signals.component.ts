import { Component, Signal, WritableSignal, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss'
})
export class LinkedSignalsComponent {
  quantitySignal:WritableSignal<number>=signal(1);
  price:number=10;

  // total:Signal<number>=computed(()=>{ return this.price*this.quantitySignal()});

  calculatePrice(x:number){
    this.quantitySignal.set(x+1);
  }

  // shortand syntax of linked signal
  // total=linkedSignal(()=>this.price*this.quantitySignal());

  // source and computation o linked signal
  total = linkedSignal({
    source: this.quantitySignal,
    computation:()=>this.price*this.quantitySignal()+1
  })
}
