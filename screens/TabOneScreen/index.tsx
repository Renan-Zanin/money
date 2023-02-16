import { StatusBar } from "react-native";
import { AccountIncome } from "../../components/AccountIncome";
import { ActionItem } from "../../components/ActionItem";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Header } from "../../components/Header";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { styles } from "./styles";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <View style={styles.content}>
        <AccountIncome />

        <View style={styles.accountActions}>
          <View style={styles.actionsContainer}>
            <Text style={styles.actionsText}>Ações</Text>
          </View>
        </View>
        <ActionItem name="Solicitar Empréstimo" icon="attach-money" />
        <ActionItem name="Investimentos" icon="show-chart" />
        <ActionItem name="Saque" icon="account-balance" />
        <ActionItem name="Extrato" icon="article" />
      </View>
    </View>
  );
}
