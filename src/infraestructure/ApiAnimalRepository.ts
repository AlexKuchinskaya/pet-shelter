import { Animal } from '../domain/Animal';
import { AnimalRepository } from '../domain/AnimalRepository';
import { ApiAnimalResponse, ApiAnimalsApiResponse } from './ApiAnimalResponse';

export class AnimalApiPetRepository implements AnimalRepository {
  private readonly endpoints = {
    animals: "https://api.petfinder.com/v2/animals",
    animalWithId: "https://api.petfinder.com/v2/animals/$id",
  }
    
  constructor(private readonly accessToken: string) {}



  async search(): Promise<Animal[]> {
    return fetch(this.endpoints.animals, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
      .then(response => response.json())
      .then((response) => {
        //console.log('animals', animals)
        const {animals} = response as ApiAnimalsApiResponse;
        
        return animals.map((animal) => {
          return {
            id: animal.id,
            name: animal.name,
            gender: animal.gender,
            age: animal.age,
            description: animal.description,
            size: animal.size,
            coat: animal.coat,
            status: animal.status,
          }
        })
      })
      /* .catch((error) =>{
        console.log(error)
         return null
      }) */
  }

  async getAnimal(id: string): Promise<Animal> {
    const urlWithId = this.endpoints.animalWithId.replace("$id", id);
    return fetch(urlWithId, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
    .then(response => response.json())
    .then(response => {
      const { animal } = response as ApiAnimalResponse;
      return {
        id: animal.id,
        name: animal.name,
        gender: animal.gender,
        age: animal.age,
        description: animal.description,
        size: animal.size,
        coat: animal.coat,
        status: animal.status,
      }
    })
    
  }
}
