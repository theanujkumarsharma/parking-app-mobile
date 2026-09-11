import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const parkingData = [
  {
    id: 1,
    name: "City Center Parking",
    distance: "1.2 km",
    price: 40,
  },
  {
    id: 2,
    name: "Mall Road Parking",
    distance: "1.8 km",
    price: 50,
  },
  {
    id: 3,
    name: "Station Parking",
    distance: "2.4 km",
    price: 30,
  },
  {
    id: 4,
    name: "Market Parking",
    distance: "3.1 km",
    price: 35,
  },
];

export default function AllParking() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>All Parking</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Find the best parking spaces near you
        </Text>

        {parkingData.map((parking) => (
          <TouchableOpacity
            key={parking.id}
            style={styles.parkingCard}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: "/customer/parking-details",
                params: {
                  id: parking.id.toString(),
                  name: parking.name,
                  price: parking.price.toString(),
                },
              })
            }
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>P</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.parkingName}>{parking.name}</Text>

              <Text style={styles.details}>
                {parking.distance} • ₹{parking.price}/hr
              </Text>

              <Text style={styles.available}>Available</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  backButton: {
    fontSize: 36,
    color: "#1769E0",
    lineHeight: 40,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  content: {
    padding: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 18,
  },

  parkingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icon: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1769E0",
  },

  info: {
    flex: 1,
  },

  parkingName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 5,
  },

  details: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 5,
  },

  available: {
    fontSize: 12,
    fontWeight: "600",
    color: "#15803D",
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
});