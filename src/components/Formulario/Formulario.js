import React from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  Alert,
  View,
  TouchableOpacity,
} from "react-native";
import style from "./Style.js";

const Formulario = () => {
  const [dados, setDados] = React.useState({
    nome: null,
    telefone: null,
    email: null,
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Text>Informe seu nome</Text>
      <TextInput
        style={style.campo}
        value={dados.nome}
        onChangeText={(text) => setDados({ ...dados, nome: text })}
      />
      <Text>Informe seu telefone</Text>
      <TextInput
        style={style.campo}
        value={dados.telefone}
        onChangeText={(text) => setDados({ ...dados, telefone: text })}
      />
      <Text>Informe seu email</Text>
      <TextInput
        style={style.campo}
        value={dados.email}
        onChangeText={(text) => setDados({ ...dados, email: text })}
      />
      <TouchableOpacity style={style.btnSalvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Formulario;
