import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('1000ms ease-in')),
      transition('* => void', animate('1000ms ease-in')),
    ]),
  ],
})
export class ProductComponent implements OnInit {
  @Input() products: IProduct[] = [];
  @Input() loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.products);
  }
}
