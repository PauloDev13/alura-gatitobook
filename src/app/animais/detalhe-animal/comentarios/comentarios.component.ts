import { Component, Input, OnInit } from '@angular/core';
import { ComentarioService } from './comentario.service';
import { Observable, of } from 'rxjs';
import { Comentarios } from './comentario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input()
  animalId: number = 0;
  comentarios$: Observable<Comentarios> = of([]);
  comentarioForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private comentarioService: ComentarioService,
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscarComentarios(this.animalId);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService
      .incluirComentario(this.animalId, comentario)
      .pipe(
        switchMap(() =>
          this.comentarioService.buscarComentarios(this.animalId),
        ),
        tap(() => {
          this.comentarioForm.reset();
          alert('Comentário salvo com sucesso');
        }),
      );
  }
}
