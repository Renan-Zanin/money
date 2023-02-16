import React from "react";
import { View, Text } from "react-native";
import {
  Feather,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={32} color="#e6e6e6" />
        <View style={styles.rightMenu}>
          <Ionicons
            name="eye-off"
            size={24}
            color="#e6e6e6"
            style={{ marginRight: 16 }}
          />
          <MaterialIcons
            name="help"
            size={24}
            color="#e6e6e6"
            style={{ marginRight: 16 }}
          />
          <FontAwesome name="user-circle" size={48} color="#e6e6e6" />
        </View>
      </View>
    </View>
  );
}
