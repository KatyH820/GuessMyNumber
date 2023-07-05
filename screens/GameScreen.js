import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { FlatListComponent } from "react-native";
import GuessLogItem from "../components/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && guess < props.userNumber) ||
      (direction === "greater" && guess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
    props.setGuessRoundsNumber((prev) => prev + 1);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (guess === props.userNumber) {
      props.setGuessRoundsNumber((prev) => prev + 1);
      props.gameOverHandler();
    }
  }, [guess, props.userNumber, props.gameOverHandler]);

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <View style={styles.Top}>
        <Title> Opponent's Guess</Title>
        <NumberContainer>{guess}</NumberContainer>
        <Text style={styles.instr}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            press={nextGuessHandler.bind(this, "greater")}
            big={FlatListComponent}
          >
            <Ionicons name="arrow-up" size={30} color="black" />
          </CustomButton>
          <CustomButton
            press={nextGuessHandler.bind(this, "lower")}
            big={false}
          >
            <Ionicons name="arrow-down" size={30} color="black" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.Bottom}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundsNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  Top: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 24,
    paddingTop: "15%",
  },
  instr: {
    fontFamily: "OleoScript-Regular",
    fontSize: 30,
    paddingBottom: "5%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  Bottom: {
    flex: 3,
    width: "80%",

    justifyContent: "center",
    // marginLeft: "10%",,
  },
});
