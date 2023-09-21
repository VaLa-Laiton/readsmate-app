import { View, Image, TouchableOpacity, Linking } from "react-native";
import nameBrand from "../assets/nameBrand.png";
import linkWeb from "../assets/internet.png";
import styles from "../styles/styles";

const Header = () => {
  const handleImagePress = () => {
    const url = "https://readsmate.netlify.app/";
    Linking.openURL(url);
  };
  return (
    <View style={styles.headerContainer}>
      <Image
        source={nameBrand}
        style={styles.nameBrand}
        resizeMode="contain"
      ></Image>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={linkWeb} style={styles.linkWeb}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
