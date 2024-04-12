import { FormEvent } from "react"
type FormData =  {
    name: string;
    surnamae: string;
    email: string
  }

type FormEventType<T extends {[key: string]: string}> = FormEvent<HTMLFormElement> & {
  elements: {
    [key in keyof T]: {
      value: string
    }
  } 
}

export const AdoptForm = () => {
  const submitForm = (event: FormEventType<FormData>) => {
    event.preventDefault();
    const t = event.elements.name
  }
  return (
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

      <button type="button">Adopt</button>
    </form>
  )
}
