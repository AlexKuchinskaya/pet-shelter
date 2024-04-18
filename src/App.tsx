import './App.css'
import { Router } from './Router'
import { LocalStorageContactRepository } from './infraestructure/LocalStorageContactRepository'
import { ContactContextProvider } from './presentation/context/ContactContext'

//Definir que clase (instancia) vamos a usar como Animal Repository

const repository = new LocalStorageContactRepository();

function App() {
  /* useFetch('https://api.petfinder.com/v2/animals', {method: 'GET'})
    .then((response) => response.json())
    .then((pets) => console.log(pets))
    .catch(eror => console.log(eror)) */
  return (
    <ContactContextProvider repository={repository}>
      <Router />
    </ContactContextProvider>
  )
}

export default App
