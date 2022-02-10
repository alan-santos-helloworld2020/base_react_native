import React from "react";
import { Button, Text, View, Image, ImageBackground } from "react-native";
import style from "./Style";

const Home = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../../images/fundo.png")}
        resizeMode="cover"
        style={style.fundo}
      >
        <Image
          resizeMode="cover"
          style={style.logo}
          source={require("../../images/logo.png")}
        />
      </ImageBackground>
    </View>
  );
};

export default Home;
