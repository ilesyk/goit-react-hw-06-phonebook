import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, ListItem } from './ContactList.styled';

export const ContactsList = () => {
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  function getFilteredContacts() {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
  const filteredContacts = getFilteredContacts();

  if (!contacts.length || !contacts) {
    return <div>PhoneBook is empty</div>;
  }
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};
