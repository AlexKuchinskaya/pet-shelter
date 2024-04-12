
import { render, screen } from "@testing-library/react";
import { AnimalApiPetRepository } from "../src/infraestructure/ApiAnimalRepository";
import { animalRespons } from "../pet_config";
import { PetList } from "../src/sections/petList/PetList";
import { describe, it, vi } from 'vitest';

//definimos el nombre de nuestra suite test
describe("Petlist section", () => {
  //van cada uno de los tests
  // estas funciones las importara el test runner que es jest
  // con npm run test jest inyecta estas funciones en el objeto global
  it('show all animals', async () => {
    //usamos la funcion render de react testing library. permite testear desde el punto de vista del usuario
    // como en petlist usamos fetch y jest se ejecuta en node, node no tiene fetch, y fallaria
    // es el navegador quien provee la funcion fetch
    // en realidad no queremos hacer la llamada, sino que moquearla
    vi.spyOn(AnimalApiPetRepository).mockImplementationOnce

    render(<PetList />)
    //await screen.findByRole('heading', { n})
  })
})