import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingComponent from '../components/LoadingComponent';
import { persistor, store } from '../store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingComponent />} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast position='bottom' />
      </PersistGate>
    </Provider>
  );
}