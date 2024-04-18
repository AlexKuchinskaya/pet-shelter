import { useParams } from 'react-router-dom'
import { AnimalRepository } from '../../domain/AnimalRepository';
import { useAnimal } from '../../hooks/useAnimal';
import { AdoptForm } from '../AdoptForm/AdoptForm';
import { ContactRepository } from '../../domain/ContactRepository';

export const PetDetail = ({
  animalRepository, 
  contactRepository,
}:
  {
    animalRepository: AnimalRepository,
    contactRepository: ContactRepository,
  }) => {
  const { id } = useParams() as {id: string}; //tengo que estar segura de que me va a venir el valor
  //const cachedId = useMemo(() => id, [id])
  
  const {animal} = useAnimal(animalRepository, id)

  if (!animal) {
    return <div>Animal not found</div>
  }

  return (
    <div>
      {id.length}
      <div>PetDetail</div>
      <div>{animal.name}</div>
      <AdoptForm repository={contactRepository} />
    </div>
  )
}
