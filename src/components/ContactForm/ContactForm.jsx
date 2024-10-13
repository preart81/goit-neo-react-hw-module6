import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required field'),

    number: Yup.string()
      .matches(phoneRegExp, 'Format: 123-12-34')
      .required('Required field'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    // addContact(newContact);
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" type="text" id={nameFieldId} className={css.field} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          name="number"
          type="tel"
          id={numberFieldId}
          className={css.field}
        />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.buttonSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
