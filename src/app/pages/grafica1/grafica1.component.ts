import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels: string[] = ['Alexis', 'Narvaez', 'Tadeo'];
  public data = [
    [566, 2450, 1300]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
