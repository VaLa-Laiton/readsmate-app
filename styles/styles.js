import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 67,
    paddingHorizontal: 12,
    backgroundColor: "#212a3e",
    marginBottom: 16,
  },
  nameBrand: {
    width: "75%",
    height: 43,
  },
  linkWeb: {
    height: 43,
    width: 43,
  },
  helloContainerFather: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  helloContainer: {
    width: "80%",
  },
  helloTitle: {
    fontSize: 44,
    fontFamily: "CourierPrime",
    marginBottom: 16,
  },
  helloText: {
    fontSize: 22,
    fontFamily: "CourierPrime",
    width: "80%",
    lineHeight: 32,
    marginBottom: 16,
  },
  helloImage: {
    width: 300,
    height: 300,
  },
  helloInfo: {
    marginTop: 48,
    marginBottom: 16,
    fontSize: 18,
    lineHeight: 28,
  },
  helloInfoLink: {
    fontSize: 16,
    color: "#0f6ffd",
    textDecorationLine: "underline",
  },
  cardBody: {
    width: 240,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 8,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 8,
  },
  cardLink: {
    fontSize: 20,
    color: "#198754",
    textDecorationLine: "underline",
  },
});

export default styles;
