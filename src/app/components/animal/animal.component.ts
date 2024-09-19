import { Component, Input } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  //@Input() animalData!:AnimalInterface;
  animalData:AnimalInterface = {
    "id": 1,
    "name": "Spike",
    "description": "Meu cachorro",
    "image": "../../../assets/cachorro.jpg",
    "idade": 12
  };
}
