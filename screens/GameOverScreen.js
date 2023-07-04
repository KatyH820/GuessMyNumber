import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Title style={styles.titleText}>GAME OVER</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/imgs/GameOver4.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton big={true} press={props.startNewGameHandler}>
          Play Again
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: { marginBottom: "10%", fontSize: 45 },
  imgContainer: {
    alignItems: "center",
    width: 300,
    height: 300,
    margin: "10%",
    marginBottom: "20%",

    // justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    // borderRadius: 1000,
  },
  buttonContainer: { alignItems: "center" },
  summaryText: {
    fontFamily: "OleoScript-Regular",
    fontSize: 30,
    textAlign: "center",
  },
  highlight: {
    color: "#fb5607",
  },
});
