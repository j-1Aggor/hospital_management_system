import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import Consultation from "./consultation";
import Details from "./details";

const ConsultationTab = createMaterialBottomTabNavigator();

const ConsultationScreen = () => {
  const { Navigator, Screen } = ConsultationTab;

  return (
    <Navigator initialRouteName="Details" activeColor="#fff" shifting={true}>
      <Screen
        name="Consultation"
        component={Consultation}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Consultation",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          tabBarColor: "#111",
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default ConsultationScreen;