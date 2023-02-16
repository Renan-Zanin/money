import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F4F4F5",
    flexDirection: "row",
    borderRadius: 5,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  columnContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountButton: {
    backgroundColor: "#17d0bc",
    width: 18,
    height: 18,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginLeft: 10,
  },
});
