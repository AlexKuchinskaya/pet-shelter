import { ReactElement, createContext, useContext, useEffect, useState } from "react"
import { Contact } from "../../domain/Contact";
import { ContactRepository } from "../../domain/ContactRepository";

const ContactContext = createContext<{ contacts: Contact[] }>(
  {
    contacts: []
  }
);

export const ContactContextProvider = ({children, repository}: {children: ReactElement, repository: ContactRepository}) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
      repository.search()
        .then((contacts) => {
          setContacts(contacts);
        })
    }, [])

    return (
      <ContactContext.Provider value={{ contacts }}>
        {children}
      </ContactContext.Provider>
    )
}

export const useContactContext = () => useContext(ContactContext);