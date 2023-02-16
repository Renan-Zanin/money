import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { InvestimentButton } from "../InvestimentButton";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";

export function NewOpportunitie() {
  const [totalQuota, setTotalQuota] = useState(0);

  function increaseQuota() {
    setTotalQuota(totalQuota + 1);
  }

  function decreaseQuota() {
    if (totalQuota > 0) setTotalQuota(totalQuota - 1);
    else setTotalQuota(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.columnContent}>
        <Text style={styles.titleText}>Código</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>#WM000277</Text>
          <MaterialIcons name="info" size={24} color="#17D0BC" />
        </View>
        <Text style={styles.titleText}>Valor total</Text>
        <Text style={styles.infoText}>R$ 144.00,00</Text>
        <Text style={styles.titleText}>Valor cota</Text>
        <Text style={styles.infoText}>R$ 144,00</Text>
        <Text style={styles.titleText}>Cotas Desejadas</Text>
        <View style={styles.chartContainer}>
          <TouchableOpacity style={styles.amountButton} onPress={decreaseQuota}>
            <FontAwesome name="minus" size={12} color="#F4F4F5" />
          </TouchableOpacity>
          <Text>{totalQuota}</Text>
          <TouchableOpacity style={styles.amountButton} onPress={increaseQuota}>
            <FontAwesome name="plus" size={12} color="#F4F4F5" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.columnContent}>
        <Text style={styles.titleText}>Garantias</Text>
        <Text style={styles.infoText}>#WM000277</Text>
        <Text style={styles.titleText}>Cotas disponíveis</Text>
        <Text style={styles.infoText}>933</Text>
        <Text style={styles.titleText}>Parcelas</Text>
        <Text style={styles.infoText}>24</Text>
        <InvestimentButton />
      </View>
    </View>
  );
}
