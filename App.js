import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles/styles";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Article from "./components/Article";
import CourierPrime from "./assets/fonts/CourierPrime-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    CourierPrime: CourierPrime,
  });

  if (!loaded) {
    return (
      <View>
        <StatusBar
          style="light"
          translucent={false}
          backgroundColor="#212a3e"
        />
        <Text style={{ fontSize: 30 }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#212a3e" />
      <Header />
      <Hello />
      <Article />
    </ScrollView>
  );
}
