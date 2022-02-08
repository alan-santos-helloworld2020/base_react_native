import Home from "./src/components/Home/Home";
import Formulario from "./src/components/Formulario/Formulario";
import Tabela from "./src/components/Tabela/Tabela";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createMaterialBottomTabNavigator();
  return (
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
              <MaterialCommunityIcons name="home" color="grey" size={26} />
            ),
          }}
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{
            tabBarLabel: "formulario",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="calendar" color="blue" size={26} />
            ),
          }}
        />
        <Stack.Screen
          name="Tabela"
          component={Tabela}
          options={{
            tabBarLabel: "tabela",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="shopping"
                color="orange"
                size={26}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
