
import { AnimalRepository } from '../../domain/AnimalRepository';
import { useAnimals } from '../../hooks/useAnimals';
import { PetCard } from '../PetCard/PetCard';

//early return
//clausula de guarde
export const PetList = ({ animalRepository }: { animalRepository: AnimalRepository }) => {
  const { repositoryData, isLoading } = useAnimals(animalRepository);
  console.log('petlist')
  return (
    <>  
      {isLoading && (
        <div className="">Loading....</div>
      )}
      {
        !isLoading && repositoryData.length === 0 ? (
          <div>
            There are no available elements
          </div>
        ) :
        <section className='pets container'>
          {repositoryData.map((animal) => {
            return (
              <PetCard key={animal.id} animal={animal} />
            )
          })}
        </section>
      }
    </>
  )
}
