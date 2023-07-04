import { Text, StyleSheet } from "react-native";

export default function Title(props) {
  return <Text style={[styles.title, props.style]}> {props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "BagelFatOne-Regular",
    fontSize: 38,
    borderWidth: 2,
    borderColor: "#ffdab9",
    padding: "2%",
    marginBottom: "14%",
    paddingHorizontal: "8%",
    paddingLeft: "4%",
  },
});
