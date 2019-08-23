import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-root',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=Products;

  constructor() { }

  ngOnInit() {
  }

  share(id) {
    console.log("id="+id);
  }

}
