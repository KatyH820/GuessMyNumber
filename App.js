import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRoundsNumber, setGuessRoundsNumber] = useState(0);
  const [fontsLoaded] = useFonts({
    "AoboshiOne-Regular": require("./assets/fonts/AoboshiOne-Regular.ttf"),
    "BagelFatOne-Regular": require("./assets/fonts/BagelFatOne-Regular.ttf"),
    "CherryBombOne-Regular": require("./assets/fonts/CherryBombOne-Regular.ttf"),
    "Chokokutai-Regular": require("./assets/fonts/Chokokutai-Regular.ttf"),
    "MoiraiOne-Regular": require("./assets/fonts/MoiraiOne-Regular.ttf"),
    "OleoScript-Regular": require("./assets/fonts/OleoScript-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRoundsNumber(0);
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        setGuessRoundsNumber={setGuessRoundsNumber}
        // guessRoundsNumber={guessRoundsNumber}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={guessRoundsNumber}
        startNewGameHandler={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient colors={["#a44a3f", "#f19c79"]} style={styles.Rootscreen}>
      <ImageBackground
        source={require("./assets/imgs/bkimg3.jpg")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.Rootscreen}>
          <View style={styles.screen}>{screen}</View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Rootscreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  backgroundImage: {
    opacity: 0.75,
  },
});
