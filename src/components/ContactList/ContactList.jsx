import css from './ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
