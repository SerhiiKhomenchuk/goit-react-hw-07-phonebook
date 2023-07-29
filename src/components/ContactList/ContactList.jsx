import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    visibleContacts.length > 0 && (
      <ul className="list-group">
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li
              key={id}
              id={id}
              className="list-group-item  d-flex justify-content-between fs-3 list-group-item-action list-group-item-warning"
            >
              <span>{name}:</span>
              <span>{number}</span>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default ContactList;
