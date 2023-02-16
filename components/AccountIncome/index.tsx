import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function AccountIncome() {
  return (
    <View style={styles.container}>
      <Text style={styles.incomeText}>Sua conta já rendeu</Text>
      <Text style={styles.incomeValue}>R$ 100,00</Text>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>Saldo:</Text>
        <Text style={styles.balanceValue}>R$ 1.000,00</Text>
      </View>
    </View>
  );
}
