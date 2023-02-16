import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface ActionItemProps {
  name: string;
  icon: "account-balance" | "attach-money" | "show-chart" | "article";
}

export function ActionItem({ name, icon }: ActionItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.actionContainer}>
        <MaterialIcons name={icon} size={24} color="#17D0BC" />
        <Text style={styles.actionText}>{name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );
}
