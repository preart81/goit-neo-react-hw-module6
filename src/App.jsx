import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null && savedContacts !== '[]')
      return JSON.parse(savedContacts);
    else
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
  });
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [searchText, setSearchText] = useState('');
  const filter = searchText.toLowerCase().trim() || '';
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.toLowerCase().includes(filter)
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox searchText={searchText} handleSearch={setSearchText} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
