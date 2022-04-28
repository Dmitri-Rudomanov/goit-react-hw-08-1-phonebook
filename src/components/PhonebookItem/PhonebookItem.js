import React from 'react';
import { useSelector } from 'react-redux';
import s from './PhonebookItem.module.css';
import { useDeleteContactMutation } from '../../redux/phonebook-reducer';
const PhonebookItem = ({ contact }) => {
  const token = useSelector(state => state.auth.token);
  const [deleteContact] = useDeleteContactMutation();
  const arg = { token, contact: contact.id };
  return (
    <li className={s.contact}>
      {contact.name}: {contact.number}{' '}
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(arg)}
      >
        Delete
      </button>
    </li>
  );
};
export default PhonebookItem;
