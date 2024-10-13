import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  const visibleContacts = contacts.filter(contact =>
     (contact.number.includes(filter)||contact.name.toLowerCase().includes(filter.toLowerCase()))
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
          deleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
