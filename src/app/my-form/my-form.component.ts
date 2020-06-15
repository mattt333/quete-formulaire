import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Order } from './order';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  model : Order = new Order();

  constructor() { }

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }

}
