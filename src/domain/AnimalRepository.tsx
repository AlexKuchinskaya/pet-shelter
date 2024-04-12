import { Animal } from "./Animal";

export interface AnimalRepository {
  search(): Promise<Animal[]>,
  getAnimal(id: string): Promise<Animal>
}