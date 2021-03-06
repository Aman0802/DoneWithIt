import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <Screen>
      <AccountScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
