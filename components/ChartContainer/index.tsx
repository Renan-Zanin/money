import React from "react";
import { View, Text } from "react-native";
import ProfitChart from "../ProfitChart";

import { styles } from "./styles";

export function ChartContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Gráfico de rendimentos</Text>
      <ProfitChart />
    </View>
  );
}
