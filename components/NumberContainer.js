import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").deviceWidth;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffdab9",
    // backgroundColor: "#fec89a",
    padding: "5%",
    paddingHorizontal: "40%",
    borderRadius: 15,
    marginBottom: "11%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: "5%",
    },
    shadowRadius: "8%",
    shadowOpacity: 0.25,
  },
  numberText: {
    fontSize: 50,
    fontFamily: "OleoScript-Regular",
  },
});
