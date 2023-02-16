import React from "react";
import { View, Text } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import { styles } from "./styles";

export function InvestimentsAndProfit() {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <MaterialIcons name="attach-money" size={24} color="#17D0BC" />
        <Text style={styles.totalText}>Total investido</Text>
      </View>
      <Text style={styles.totalAmount}>R$ 10.000,00</Text>
      <View style={styles.profitContainer}>
        <View style={styles.infoContainer}>
          <Fontisto name="bar-chart" size={16} color="#17D0BC" />
          <Text style={styles.infoText}>Total a receber</Text>
        </View>
        <Text style={styles.infoAmount}>R$ 12.800,00</Text>
      </View>
      <View style={styles.profitContainer}>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="heart-circle-outline"
            size={22}
            color="#17D0BC"
          />
          <Text style={styles.infoText}>Lucro esperado</Text>
        </View>
        <Text style={styles.infoAmount}>R$ 2.800,00</Text>
      </View>
    </View>
  );
}
