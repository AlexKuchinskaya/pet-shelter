import { ReactElement } from "react";
import { PetDetail } from "../sections/PetDetail/PetDetail";
import { AnimalApiPetRepository } from "../infraestructure/ApiAnimalRepository";
import { config } from "../../pet_config";

const animalRepository = new AnimalApiPetRepository(config.pet_finder_access_token)
export class PetDetailFactory {
  static create(): ReactElement {
    return <PetDetail animalRepository={animalRepository}/>
  }
}