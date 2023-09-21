import { useEffect, useState } from "react";
import styles from "../styles/styles";
import { View, Text, Linking, TouchableOpacity } from "react-native";

const Article = () => {
  const [dataArray, setDataArray] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://readsmate-restapi-production.up.railway.app/api/article"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDataArray(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.helloContainerFather}>
      <View style={styles.helloContainer}>
        {dataArray.map((item, index) => (
          <View style={styles.cardBody} key={index}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title} </Text>
              <TouchableOpacity onPress={() => openLink(item.urlFile)}>
                <Text style={styles.cardLink}>Leer</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Article;
