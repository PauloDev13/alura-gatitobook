import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.interface';
import { Observable, of } from 'rxjs';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId: number = 0;
  animal$: Observable<Animal> = of({} as Animal);

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalService.buscaPorId(this.animalId);
  }

  curtir() {
    this.animalService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animalService.buscaPorId(this.animalId);
      }
    });
  }

  excluir() {
    this.animalService.excluirAnimal(this.animalId).subscribe(
      () => this.router.navigate(['/animais']),
      (error) => console.error(error),
    );
  }
}
