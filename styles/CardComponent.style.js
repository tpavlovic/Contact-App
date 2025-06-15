import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 16
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12
  },
  icon: {
    marginRight: 12
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937"
  },
  phone: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2
  },
});