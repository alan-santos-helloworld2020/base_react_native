import Home from "./src/components/Home/Home";
import Formulario from "./src/components/Formulario/Formulario";
import Tabela from "./src/components/Tabela/Tabela";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from 'react-redux';
import store from './src/store/store'

export default function App() {
  const Stack = createMaterialBottomTabNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <MaterialCommunityIcons
               name="home"
               color="white"
               size={26}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{
            tabBarLabel: "Formulário",
            tabBarIcon: () => (
              <MaterialCommunityIcons
               name="calendar"
               color="white"
               size={26}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Tabela"
          component={Tabela}
          options={{
            tabBarLabel: "Tabela",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="shopping"
                color="white"
                size={26}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
