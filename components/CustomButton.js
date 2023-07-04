import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={props.big ? styles.buttonBig : styles.button}
      onPressIn={(pressed) => pressed && styles.pressedEffect}
      onPress={props.press}
    >
      <Text style={props.big ? styles.buttonTextBig : styles.buttonText}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "35%",
    padding: "4%",
    backgroundColor: "#fbc4ab",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
    borderRadius: 5,
    // backgroundColor: "yellow",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: "5%",
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  buttonBig: {
    width: "50%",
    padding: "5%",
    backgroundColor: "#fbc4ab",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
    borderRadius: 5,
    // backgroundColor: "yellow",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: "5%",
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginTop: "10%",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "OleoScript-Regular",
  },
  buttonTextBig: {
    fontSize: 25,
    fontFamily: "OleoScript-Regular",
  },
  pressedEffect: {
    opacity: 0.5,
  },
});
