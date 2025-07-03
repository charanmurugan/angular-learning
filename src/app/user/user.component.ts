import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  constructor(private router: Router) {
    console.log("Constructor called.")
  }
  ngDoCheck(): void {
    //use for every change detection
    console.log("3) ngDoCheck called");
  }
  ngAfterContentInit(): void {
    //use for ng-content
    console.log("4) ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("5) ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    // use for view child
    console.log("6) ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("7) ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("8) ngOnDestroy called");
  }

  
  ngOnInit(): void {
    //used for API call
    console.log("2) ngOnInit called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //used for component input property
   console.log("1) ngOnChanges called.");
  }

  login() {
    // this.router.navigateByUrl('data-binding');
    this.router.navigate(['ngfor-vs-for'])
  }
}
