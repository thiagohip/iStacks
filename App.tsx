import {  useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}
