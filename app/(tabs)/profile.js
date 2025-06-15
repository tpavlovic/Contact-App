import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import style from "../../styles/Profile.style";

export default function ProfileScreen () {
  return(
    <View style={style.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
        style={style.avatar}
        testID="profile-image"
      />
      <Text style={style.name}>Ana Petrović</Text>
      <View style={style.phoneSection}>
        <Ionicons name='call' size={20} color='white' />
        <Text style={style.phone}>+381 60 1234567</Text>
      </View>
    </View>
  );
}