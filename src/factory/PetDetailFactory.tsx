import { ReactElement } from "react";
import { PetDetail } from "../sections/PetDetail/PetDetail";
import { AnimalApiPetRepository } from "../infraestructure/ApiAnimalRepository";
import { config } from "../../pet_config";
import { LocalStorageContactRepository } from "../infraestructure/LocalStorageContactRepository";

const animalRepository = new AnimalApiPetRepository(config.pet_finder_access_token)
const contactRepository = new LocalStorageContactRepository();
export class PetDetailFactory {
  static create(): ReactElement {
    return (
      <PetDetail 
        animalRepository={animalRepository} 
        contactRepository={contactRepository}
      />
    )
  }
}