import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {


  progreso: number = 40;

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambioValor(valor: number) {
    
    if(this.progreso >= 100 && valor >= 0) {
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0) {
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
