import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name:string="Charan Murugan"
  jobTitle:string='Software Engineer';
  img:string="https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg";

  save(){
    alert("Data saved succesfully");
  }
  change(){
   alert("Country Changed")
  }
}
