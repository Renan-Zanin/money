import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 12,
    marginTop: 20,
    marginLeft: 16,
    backgroundColor: "#f4f4f5",
    borderRadius: 10,
    width: "60%",
  },
  incomeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 2,
  },
  incomeValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17D0BC",
    marginBottom: 2,
  },
  balanceView: {
    flexDirection: "row",
  },
  balanceText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#666",
    marginBottom: 2,
    marginRight: 5,
  },
  balanceValue: {
    fontSize: 12,
    fontWeight: "400",
    color: "#17D0BC",
  },
});
