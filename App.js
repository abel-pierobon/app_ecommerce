import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import ItemListCategories from './src/screens/ItemListCategories';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'Tienda Gamer'}/>
      {/* <Home /> */}
      <ItemListCategories />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
});
