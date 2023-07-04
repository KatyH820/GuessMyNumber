import { StyleSheet, Text, View } from "react-native";

export default function GuessLogItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>#{props.roundsNumber} </Text>
      <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fec89a",
    padding: "5%",
    paddingHorizontal: "10%",
    borderRadius: 10,
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: "5%",
    },
    shadowRadius: "8%",
    shadowOpacity: 0.25,
  },
  itemText: {
    fontFamily: "OleoScript-Regular",
    fontSize: 16,
  },
});
