import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>PARKU</Text>
        <Text style={styles.title}>Welcome to ParkU</Text>

        <Text style={styles.subtitle}>
          Find parking. Park easily.{"\n"}Get moving.
        </Text>

        <Text style={styles.question}>
          How would you like to continue?
        </Text>

        {/* Customer */}
        <TouchableOpacity
          style={styles.roleCard}
          activeOpacity={0.8}
          onPress={() => router.push("/customer/login")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚗</Text>
          </View>

          <View style={styles.roleText}>
            <Text style={styles.roleTitle}>As a Customer</Text>

            <Text style={styles.roleDescription}>
              Find and book parking spaces
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Parking Owner */}
        <TouchableOpacity
          style={styles.roleCard}
          activeOpacity={0.8}
          onPress={() => router.push("/owner/login")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🅿️</Text>
          </View>

          <View style={styles.roleText}>
            <Text style={styles.roleTitle}>As a Parking Owner</Text>

            <Text style={styles.roleDescription}>
              Manage and earn from your parking
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "900",
    color: "#1769E0",
    textAlign: "center",
    marginBottom: 35,
    letterSpacing: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 10,
  },

  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginTop: 45,
    marginBottom: 18,
  },

  roleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
  },

  roleText: {
    flex: 1,
    marginLeft: 15,
  },

  roleTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  roleDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },

  arrow: {
    fontSize: 30,
    color: "#9CA3AF",
    marginLeft: 8,
  },
});