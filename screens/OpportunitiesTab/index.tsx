import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { AccountIncome } from "../../components/AccountIncome";
import { Header } from "../../components/Header";
import { NewOpportunitie } from "../../components/NewOpportunitie";

import { styles } from "./styles";

export function OpportunitiesTab() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <AccountIncome />
      <ScrollView style={styles.content}>
        <NewOpportunitie />
        <NewOpportunitie />
        <NewOpportunitie />
      </ScrollView>
    </View>
  );
}
