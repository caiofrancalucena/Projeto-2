import { Injectable } from '@angular/core';
import { AnimalInterface } from '../interfaces/animal-interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animalsList: AnimalInterface[] = [
    {
      "id": 1,
      "name": "Spike",
      "description": "Spike é um animal docil, que adora brincar. Ele está na familia a muitos anos, sendo que adora brincar mais os seus 'irmâos', atualmente ele por já ter sua idade um pouco avançada, não é mais tão ativo, mas ainda curte muito passear na rua",
      "image": "../../../assets/cachorro.jpg",
      "idade": 12
    }
  ];
  constructor() { }

  getAllAnimals(): AnimalInterface[]{
    return this.animalsList;
  }

  getAnimalById(id: number): AnimalInterface | undefined{
    return this.animalsList.find(animal => animal.id === id);
  }
}
