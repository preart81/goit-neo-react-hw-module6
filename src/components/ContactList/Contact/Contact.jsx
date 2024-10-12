import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.contactCard} key={id}>
      <ul className={css.contactInfo}>
        <li>
          <IoPerson /> {name}
        </li>
        <li>
          <FaPhoneAlt /> {number}
        </li>
      </ul>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
