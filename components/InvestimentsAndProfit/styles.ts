import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f4f4f5",
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
    marginBottom: 5,
    marginLeft: 5,
  },
  totalContainer: {
    flexDirection: "row",
  },
  totalAmount: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: "bold",
    color: "#666",
  },
  profitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  infoAmount: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
});
