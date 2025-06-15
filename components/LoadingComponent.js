import { ActivityIndicator, Text, View } from 'react-native';
import styles from '../styles/LoadingComponent.style';

export default function LoadingComponent({ message = 'Loading...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}