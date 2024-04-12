import { Animal } from '../../domain/Animal'
import './PetCard.scss';

export const PetCard = ({ animal }: { animal: Animal }) => {
  return (
    <article className='pet__card'>
      {/* <img width={300} height={300} src={animal.photos[0]?.small} alt={animal.type} /> */}
      <div>
        <h3>
          {animal.name} ({animal.gender})
        </h3>
        <span>
          {animal.age}
        </span>
      </div>
      <p>
        {animal.description}
      </p>
      <div>
        <span>
          {animal.gender}
        </span>
        <span>
          {animal.size}
        </span>
        <span>
          {animal.coat}
        </span>
        <span>
          {animal.status}
        </span>
      </div>
    </article>
  )
}