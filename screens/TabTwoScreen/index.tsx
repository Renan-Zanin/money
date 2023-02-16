import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { AccountIncome } from "../../components/AccountIncome";
import { ChartContainer } from "../../components/ChartContainer";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Header } from "../../components/Header";
import { InvestimentButton } from "../../components/InvestimentButton";
import { InvestimentsAndProfit } from "../../components/InvestimentsAndProfit";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";

export default function TabTwoScreen() {
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
        <InvestimentsAndProfit />
        <InvestimentButton />
        <ChartContainer />
      </ScrollView>
    </View>
  );
}
