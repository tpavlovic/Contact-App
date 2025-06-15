import { FlatList, Image, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites.list);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
  },
  list: {
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    margin: '1.66%',
    borderRadius: 999,
  },
});