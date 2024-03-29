import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  //  product will be passed from the parent component
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}