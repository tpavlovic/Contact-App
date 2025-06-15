import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import LoadingComponent from '../../components/LoadingComponent';
import { setContacts } from '../../store/contactsSlice';

export default function ContactScreen () {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  const fetchContacts = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://randomuser.me/api/?results=10');

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      dispatch(setContacts(data.results));
    } catch (err) {
      setError(err.message || 'An error occurred while loading contacts.');
      console.error('Fetch error: ', err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const filteredContacts = useMemo(() => {
    return contacts.filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
      return fullName.includes(debouncedQuery.toLowerCase());
    }
  )}, [contacts, debouncedQuery]);

  if (isLoading) return <LoadingComponent />

  if (error) {
    return (
      <View style={{ flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', marginBottom: 12, fontSize: 16 }}>{ error }</Text>
        <Button title='Try Again' onPress={fetchContacts} />
      </View>
    );
  }

  return(
    <View style={{ flex: 1, padding: 12 }}>
      <TextInput
        placeholder='Search...'
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{
          padding: 10,
          backgroundColor: '#F3F4F6',
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <ContactListItem item={item} />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No contacts match your search.
          </Text>
        }
      />
    </View>
  );
}