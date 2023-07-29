import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column mb-3 p-5 container-sm">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {contacts.contacts.length > 0 ? (
        <ContactList />
      ) : (
        !isLoading &&
        !error && (
          <div className="alert alert-info" role="alert">
            You haven't added any contact yet
          </div>
        )
      )}
    </div>
  );
};

export default App;
