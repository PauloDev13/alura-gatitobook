import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.interface';
import { Observable, of } from 'rxjs';
import { AnimalService } from '../animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  // animalId: number = 0;
  animal$: Observable<Animal> = of({} as Animal);

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalService.buscaPorId(id);
  }
}
