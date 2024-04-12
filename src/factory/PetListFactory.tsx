import { ReactElement } from "react";
import { config } from "../../pet_config";
import { AnimalRepository } from "../domain/AnimalRepository";
import { AnimalApiPetRepository } from "../infraestructure/ApiAnimalRepository";
import { PetList } from "../sections/petList/PetList";

const animalRepository: AnimalRepository = new AnimalApiPetRepository(config.pet_finder_access_token);

export class PetListFactory {
  static create(): ReactElement {
    return <PetList animalRepository={animalRepository}/>
  }
}