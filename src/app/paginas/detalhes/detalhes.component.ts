import { Component, inject, Inject } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal-interface';
import { AnimalService } from '../../servicos/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  animal: AnimalInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute)
  animalService: AnimalService = inject(AnimalService)

  constructor(){
    const id = Number(this.route.snapshot.params['id']);
  }
}
