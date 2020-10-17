import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() emitirValor: EventEmitter<number> = new EventEmitter();

  // get getPorcentaje() {
  //   return `${this.progreso}%`;
  // }

  cambioValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.emitirValor.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.emitirValor.emit(0);
      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;
    this.emitirValor.emit(this.progreso);
  }

  constructor() {}

  ngOnInit(): void {}

  changeModel(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.emitirValor.emit(this.progreso);
  }
}
