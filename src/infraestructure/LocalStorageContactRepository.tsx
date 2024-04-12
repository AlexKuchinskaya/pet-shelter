import { Contact } from "../domain/Contact";
import { ContactRepository } from "../domain/ContactRepository";

export class LocalStorageContactRepository implements ContactRepository {
  async save(contact: Contact): Promise<void> {
    await Promise.resolve()
  }

}