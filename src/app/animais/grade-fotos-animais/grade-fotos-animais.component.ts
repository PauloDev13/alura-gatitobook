import { Component, Input, OnInit } from '@angular/core';
import { Animais } from '../animal.interface';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css'],
})
export class GradeFotosAnimaisComponent implements OnInit {
  @Input()
  animais: Animais = {} as Animais;

  constructor() {}

  ngOnInit(): void {}
}
