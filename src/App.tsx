import './App.css'
import { Router } from './Router'

//Definir que clase (instancia) vamos a usar como Animal Repository


function App() {
  /* useFetch('https://api.petfinder.com/v2/animals', {method: 'GET'})
    .then((response) => response.json())
    .then((pets) => console.log(pets))
    .catch(eror => console.log(eror)) */
  return(
    <Router />
  )
}

export default App
