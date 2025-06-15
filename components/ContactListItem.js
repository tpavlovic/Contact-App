import { useRouter } from 'expo-router';
import { Pressable } from "react-native";
import CardComponent from './CardComponent';

export default function ContactListItem ({ item }) {
  const router = useRouter();

  return(
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/user-details',
          params: {
            contact: JSON.stringify(item)
          },
        })
      }
    >
      <CardComponent item={item} /> 
    </Pressable>
  );
}