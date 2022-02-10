import React, { useEffect } from "react";
import { View,Text, Alert } from "react-native";
import { useSelector } from "react-redux";
import style from './Style';

const Tabela = ({ navigation }) => {
  const cliente = useSelector((state) => state.cliente.cliente);
  useEffect(() => {
    Alert.alert(`Hello: ${cliente.nome}`);
  });
  return (
  <View style={style.container}>
     <Text>{cliente.nome}</Text>
  </View>
  );
};

export default Tabela;
