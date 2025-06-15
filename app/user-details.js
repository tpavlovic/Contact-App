import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../components/CardComponent';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import style from '../styles/UserDetails.style';

export default function UserDetails () {
  const { contact } = useLocalSearchParams();
  const parsedData = JSON.parse(contact);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite = favorites && favorites.some((item) => item.login.uuid === parsedData.login.uuid);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(parsedData));
      Toast.show({
        type: 'info',
        text1: 'Removed from favorites',
        text2: `${parsedData.name.first} ${parsedData.name.last} has been removed.`,
        visibilityTime: 1000
      });
    } else {
      dispatch(addFavorite(parsedData));
      Toast.show({
        type: 'success',
        text1: 'Added to favorites',
        text2: `${parsedData.name.first} ${parsedData.name.last} has been added to your favorites.`,
        visibilityTime: 1000
      });
    }
  };

  return(
    <>
      <Stack.Screen
        options={{
          title: parsedData?.name?.first || 'Contact',
          headerBackTitle: 'Back',
          headerShown: true,
        }}
      />

      <View style={style.container}>
        <Image source={{ uri: parsedData.picture.medium }} style={style.avatar} />
        <Text style={style.name}>{`${parsedData.name.first} ${parsedData.name.last}`}</Text>
        <Text style={style.phone}>{parsedData.phone}</Text>

         <TouchableOpacity onPress={toggleFavorite} style={style.favoriteButton}>
          <Text style={style.favoriteButtonText}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Text>
        </TouchableOpacity>
      </View>

    <CardComponent 
        item={parsedData} 
        value={parsedData.email} 
        title={'Email'} 
        nameIcon={'mail'} 
      /> 
      <CardComponent 
        item={parsedData} 
        value={parsedData.cell} 
        title={'Work'} 
        nameIcon={'business'} 
      /> 
      <CardComponent 
        item={parsedData} 
        title={'Personal'} 
        nameIcon={'call'} 
      /> 
    </>
  );
}