import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from "react-native";
import styles from '../styles/CardComponent.style';

export default function CardComponent({ item, nameIcon, title, value }) {
  const showIcon = !!nameIcon;
  const nameText = title || `${item.name.first} ${item.name.last}`;
  const phoneText = value || item.phone;

  return (
    <View style={styles.card}>
      {showIcon ?
        <Ionicons name={nameIcon} size={32} color="#374151" style={styles.icon} />
       : 
        <Image style={styles.avatar} source={{ uri: item.picture.medium }} />
      }
      <View style={styles.info}>
        <Text style={styles.name}>{nameText}</Text>
        <Text style={styles.phone}>{phoneText}</Text>
      </View>
    </View>
  );
}