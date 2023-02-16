import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#e4e4e7",
    borderBottomWidth: 2,
    marginHorizontal: 16,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
  },
});
