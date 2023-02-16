import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";

class ProfitChart extends React.PureComponent {
  render() {
    const data = [
      {
        key: 1,
        amount: 10000,
        description: "Total investido",
        svg: { fill: "#3340cf" },
      },
      {
        key: 2,
        amount: 12800,
        description: "Total a receber",

        svg: { fill: "#a2c1ff" },
      },
      {
        key: 3,
        amount: 2800,
        description: "Lucro esperado",
        svg: { fill: "#2b3584" },
      },
    ];

    return (
      <View>
        <PieChart
          style={{ height: 200 }}
          data={data}
          valueAccessor={({ item }) => item.amount}
          outerRadius={"95%"}
        />

        <View style={styles.labelsContainer}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <FontAwesome name="circle" size={24} color={item.svg.fill} />
                <Text key={index} style={styles.textDescription}>
                  {item.description}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default ProfitChart;
