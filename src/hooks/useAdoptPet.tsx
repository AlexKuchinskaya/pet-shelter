import { Contact } from "../domain/Contact"
import { ContactFormError } from "../domain/ContactFormError"
import { ContactRepository } from "../domain/ContactRepository"
import { useContactContext } from "../presentation/context/ContactContext"

export const useAdoptPet = (repository: ContactRepository): {
  save: (contact: Contact) => Promise<ContactFormError | void>
} => {
  const {contacts} = useContactContext();
  const save = async (contact: Contact): Promise<ContactFormError | void> => {
    let emailSubmittedThreeTimes = false;
    if (emailSubmittedThreeTimes) {
      return new ContactFormError(contact.email)
    }
    
    repository.save(contact)
      .finally(() => {
        document.dispatchEvent(new CustomEvent('contactAdded'));
      });
  }

  return { save }
}