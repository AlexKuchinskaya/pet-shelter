import { Contact } from "./Contact";

export interface ContactRepository {
  search(): Promise<Contact[]>;
  save(contact: Contact): Promise<void>;
}