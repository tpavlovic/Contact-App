import { render } from '@testing-library/react-native';
import ProfileScreen from '../app/(tabs)/profile';

test('Profile shown', () => {
  const { getByText, getByTestId } = render(<ProfileScreen />);

  expect(getByTestId('profile-image')).toBeTruthy();
  expect(getByText('Ana Petrović')).toBeTruthy();
  expect(getByText('+381 60 1234567')).toBeTruthy();
});