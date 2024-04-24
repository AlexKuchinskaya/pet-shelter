import { FormEvent, useState } from "react"
import { useAdoptPet } from "../../hooks/useAdoptPet";
import { ContactRepository } from "../../domain/ContactRepository";

type FormFields =  {
    name: string;
    surname: string;
    email: string;
    tel: string;
  }

type FormEventType<T extends {[key: string]: string}> = FormEvent<HTMLFormElement> & {
  target: {
    elements: {
      [key in keyof T]: {
        value: T[key]
      }
    } 
  }
}

export const AdoptForm = ({
  repository,
} : {
  repository: ContactRepository
}) => {
  const [hasExceededEmailSubmissionLimit, setHasExceededEmailSubmissionLimit] = useState(false);

  const { save } = useAdoptPet(repository);

  const submitForm = async (event: FormEventType<FormFields>) => {
    event.preventDefault();
    const {name, surname, email, tel} = event.target.elements
    const error = await save({
      name: name.value,
      surname: surname.value,
      email: email.value,
      tel: tel.value
    })

    if (error) {
      setHasExceededEmailSubmissionLimit(true)
    }
  }
  return (
    <section>

    <form action="" onSubmit={submitForm}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname"/>
      </div>
      <div>
        <label htmlFor="tel">Phone number</label>
        <input type="tel" id="tel"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
      </div>

      {hasExceededEmailSubmissionLimit && (
        <div>You can not submit more than 3 forms for adopt a pet with the same email.</div>
      )}

      <button type="button">Adopt</button>
    </form>

    
    </section>
  )
}
