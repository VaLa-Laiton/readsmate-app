import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "../styles/styles";
import helloImage from "../assets/landing-desing.png";

const Hello = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.helloContainerFather}>
      <View style={styles.helloContainer}>
        <Text style={styles.helloTitle}>Bienvenida/o</Text>
        <Text style={styles.helloText}>
          Descubre artículos únicos creados por usuarios como tú. {"\n"}
          ¡Sumérgete en el conocimiento compartido y sé parte de nuestra
          vibrante comunidad!
        </Text>
        <Image source={helloImage} style={styles.helloImage}></Image>
        <Text style={styles.helloInfo}>
          ¡Te invito a leer un artículo especial (
          <Text
            style={styles.helloInfoLink}
            onPress={() =>
              handleLinkPress(
                "https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit"
              )
            }
          >
            Que es READSMATE
          </Text>
          ), donde encontrarás todo lo que necesitas saber sobre esta web única!
          Aprende cómo publicar tus propios artículos y descubre emocionantes
          actualizaciones y futuras implementaciones planeadas especialmente
          para ti. ¡Sumérgete en el conocimiento compartido y desata todo tu
          potencial! Con mucho ❤️ {" "}
          <Text
            style={styles.helloInfoLink}
            onPress={() =>
              handleLinkPress("https://www.linkedin.com/in/angel-david-v-l/")
            }
          >
            Angel David
          </Text>
          .
        </Text>
      </View>
    </View>
  );
};

export default Hello;
