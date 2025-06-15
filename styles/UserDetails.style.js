import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 14,
    alignItems: 'center',
    backgroundColor: '#309adc'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold'
  },
  phone: {
    fontSize: 18,
    color: '#000'
  },
  favoriteButton: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 2
  },
  favoriteButtonText: {
    fontWeight: '600',
    color: '#309adc'
  },
});
