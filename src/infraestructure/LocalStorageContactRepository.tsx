import { Contact } from "../domain/Contact";
import { ContactRepository } from "../domain/ContactRepository";

export class LocalStorageContactRepository implements ContactRepository {
  localStorageKey: string;

  constructor() {
    this.localStorageKey = 'contacts'
  }
  async search(): Promise<Contact[]> {
    const contacts = localStorage.getItem(this.localStorageKey)
    return Promise.resolve(contacts)
      .then((data) => {
        if (!data) {
          return [] 
        }
        return JSON.parse(data) as Contact[]
      })
  }
  async save(contact: Contact): Promise<void> {
    await Promise.resolve()
  }

}