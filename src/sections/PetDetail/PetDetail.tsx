import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { AnimalRepository } from '../../domain/AnimalRepository';
import { useAnimal } from '../../hooks/useAnimal';

export const PetDetail = ({animalRepository}: {animalRepository: AnimalRepository}) => {
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
    </div>
  )
}

/* const returnMe = (a: any) => a;
const a = {
  name:'hola'
 } ;
 const bc = returnMe(a);
bc.name
function returnmeG<T>(a: T): T {
  return a;
} 

useParams<T>(){
  Readonly<Params<T>>
}

const b = returnmeG(a);

b.name */