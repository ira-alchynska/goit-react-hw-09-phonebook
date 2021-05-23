import React, { useState } from 'react';
import ButtonForm from './ButtonForm';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/contacts-operations';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';

const ContactForm = () => {
  const items = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const labelInputIdName = uuidv4();
  const labelInputIdNumber = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    const contact = { name: name, number: number };
    event.preventDefault();

    const isOriginal = items.some(item => item.name === contact.name);
    if (isOriginal) {
      alert(`${contact.name} has already exists`);
      resetForm();
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={labelInputIdName}>
        Name
      </label>
      <input
        className={styles.input}
        id={labelInputIdName}
        type="text"
        name="name"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      ></input>
      <label className={styles.label} htmlFor={labelInputIdNumber}>
        Number
      </label>
      <input
        className={styles.input}
        id={labelInputIdNumber}
        type="tel"
        name="number"
        required
        placeholder="Enter you number"
        value={number}
        onChange={handleChange}
      ></input>
      <ButtonForm />
    </form>
  );
};

export default ContactForm;
