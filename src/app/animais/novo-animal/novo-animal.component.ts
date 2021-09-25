import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css'],
})
export class NovoAnimalComponent implements OnInit {
  formularioAnimal!: FormGroup;
  file: File = new File([], '');
  preview = '';
  percentualConcluido = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formularioAnimal = this.formBuilder.group({});
  }

  gravaArquivo(arquivo: EventTarget) {}

  upload() {}
}
