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
import {salvarReduce} from '../../slices/slice'
import { useSelector,useDispatch } from "react-redux";

const Formulario = () => {
  const cliente  = useSelector(state => state.cliente.cliente);
  const dispatich = useDispatch();
  const [dados, setDados] = React.useState({
    nome: null,
    telefone: null,
    email: null,
  });
  const salvarDados = ()=>{

    dispatich(salvarReduce(dados));

  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Text>Informe seu Nome</Text>
      <TextInput
        style={style.campo}
        value={dados.nome}
        onChangeText={(text) => setDados({ ...dados, nome: text })}
      />
      <Text>Informe seu Telefone</Text>
      <TextInput
        style={style.campo}
        value={dados.telefone}
        onChangeText={(text) => setDados({ ...dados, telefone: text })}
      />
      <Text>Informe seu Email</Text>
      <TextInput
        style={style.campo}
        value={dados.email}
        onChangeText={(text) => setDados({ ...dados, email: text })}
      />
      <TouchableOpacity 
      style={style.btnSalvar}
      onPress={() => salvarDados()}
      >
        <Text>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Formulario;
