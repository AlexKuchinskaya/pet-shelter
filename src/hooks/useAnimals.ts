import { useEffect, useState } from "react";
import { Animal } from "../domain/Animal";
import { AnimalRepository } from "../domain/AnimalRepository";

export const useAnimals = (animalRepository: AnimalRepository): {
  repositoryData: Animal[],
  isLoading: boolean
} => {
  const [repositoryData, setRepositoryData] = useState<Animal[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setLoading(true);
    animalRepository.search()
      .then(data => setRepositoryData(data))
      .finally(() => {
        document.dispatchEvent(new CustomEvent('pageLoaded'));
        setLoading(false);
      })
  }, [animalRepository])

  return { repositoryData, isLoading }
}