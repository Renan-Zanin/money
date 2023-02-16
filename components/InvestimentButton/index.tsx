import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function InvestimentButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>Investir</Text>
    </TouchableOpacity>
  );
}
