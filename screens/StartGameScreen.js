import { ImageBackground, TextInput, View, Text, Alert } from "react-native";
import { StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function StartGameScreen(props) {
  const [entertedNumber, setEntertedNumber] = useState("");

  function numberInputHandler(entertedText) {
    setEntertedNumber(entertedText);
  }

  function resetInputHandler() {
    setEntertedNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(entertedNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "cancel", onPress: resetInputHandler }]
      );
      return;
    }

    props.pickedNumberHandler(chosenNumber);
  }
  return (
    <>
      <Text style={styles.title}>Guess My Number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a number from 1 to 99"
          style={styles.inputField}
          maxLength={2}
          keyboardType="number-pad"
          value={entertedNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <CustomButton big={false} press={resetInputHandler}>
            Reset
          </CustomButton>
          <CustomButton big={false} press={confirmInputHandler}>
            Confirm
          </CustomButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "BagelFatOne-Regular",
    fontSize: 40,
    marginBottom: "10%",
  },
  inputContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffdab9",
    padding: "10%",
    borderRadius: 5,
    paddingTop: "15%",
    paddingBottom: "10%",
    marginBottom: "30%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: "5%",
    },
    shadowRadius: "8%",
    shadowOpacity: 0.25,
  },
  inputField: {
    padding: "4%",
    width: "100%",
    // borderColor: "#cccccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "OleoScript-Regular",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "13%",
  },
});
