import { useEffect, useState } from "react"
import { Animal } from "../domain/Animal"
import { AnimalRepository } from "../domain/AnimalRepository"

export const useAnimal = (animalRepository: AnimalRepository, id: string) => {
  const [animal, setAnimal] = useState<Animal>()

  useEffect(() => {
    animalRepository
      .getAnimal(id)
      .then(animal => {
        setAnimal(animal)
      })
  }, [animalRepository, id])

  return { animal }
}