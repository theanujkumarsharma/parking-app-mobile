import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const parkingData = [
  {
    id: "1",
    name: "Covered Parking",
    distance: "0.4 km",
    price: "₹50/hour",
    type: "Covered",
  },
  {
    id: "2",
    name: "Private Parking",
    distance: "0.8 km",
    price: "₹30/hour",
    type: "Private",
  },
  {
    id: "3",
    name: "City Parking",
    distance: "1.2 km",
    price: "₹70/hour",
    type: "Public",
  },
];

export default function CustomerHome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>👋 Hello, Rahul!</Text>
          <Text style={styles.question}>
            Where do you want to park?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/customer/profile")}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search location"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Map */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>MAP</Text>

          <View style={styles.mapArea}>
            {/* Dummy parking markers */}

            <View style={[styles.marker, styles.marker1]}>
              <Text style={styles.markerPin}>📍</Text>
              <Text style={styles.markerPrice}>₹50</Text>
            </View>

            <View style={[styles.marker, styles.marker2]}>
              <Text style={styles.markerPin}>📍</Text>
              <Text style={styles.markerPrice}>₹30</Text>
            </View>

            <View style={[styles.marker, styles.marker3]}>
              <Text style={styles.markerPin}>📍</Text>
              <Text style={styles.markerPrice}>₹70</Text>
            </View>

            <View style={styles.youAreHere}>
              <View style={styles.locationDot} />
              <Text style={styles.locationText}>
                You
              </Text>
            </View>
          </View>
        </View>

        {/* Nearby Parking */}
        <View style={styles.nearbyHeader}>
          <Text style={styles.nearbyTitle}>
            Nearby Parking
          </Text>

          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Parking cards */}
        {parkingData.map((parking) => (
          <TouchableOpacity
            key={parking.id}
            style={styles.parkingCard}
            activeOpacity={0.8}
          >
            <View style={styles.parkingIconContainer}>
              <Text style={styles.parkingIcon}>🅿️</Text>
            </View>

            <View style={styles.parkingInfo}>
              <Text style={styles.parkingName}>
                {parking.name}
              </Text>

              <Text style={styles.parkingDetails}>
                {parking.distance}  •  {parking.price}
              </Text>
            </View>

            <Text style={styles.cardArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeNavIcon}>⌂</Text>
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/customer/bookings")}
        >
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/customer/profile")}
        >
          <Text style={styles.navIcon}>●</Text>
          <Text style={styles.navText}>Profile</Text>
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

  header: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  question: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 5,
  },

  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    fontSize: 22,
  },

  scrollContent: {
    paddingHorizontal: 22,
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 18,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },

  mapContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 25,
  },

  mapTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    textAlign: "center",
    paddingVertical: 12,
  },

  mapArea: {
    height: 230,
    backgroundColor: "#E8EDF3",
    position: "relative",
    overflow: "hidden",
  },

  marker: {
    position: "absolute",
    alignItems: "center",
  },

  marker1: {
    left: "18%",
    top: "25%",
  },

  marker2: {
    right: "18%",
    top: "25%",
  },

  marker3: {
    left: "45%",
    top: "58%",
  },

  markerPin: {
    fontSize: 22,
  },

  markerPrice: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 7,
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
  },

  youAreHere: {
    position: "absolute",
    left: "50%",
    top: "43%",
    alignItems: "center",
  },

  locationDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#1769E0",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  locationText: {
    fontSize: 11,
    color: "#1769E0",
    fontWeight: "700",
    marginTop: 3,
  },

  nearbyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  nearbyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },

  viewAll: {
    fontSize: 13,
    color: "#1769E0",
    fontWeight: "600",
  },

  parkingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  parkingIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  parkingIcon: {
    fontSize: 22,
  },

  parkingInfo: {
    flex: 1,
    marginLeft: 13,
  },

  parkingName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  parkingDetails: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },

  cardArrow: {
    fontSize: 27,
    color: "#9CA3AF",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeNavIcon: {
    fontSize: 23,
    color: "#1769E0",
  },

  activeNavText: {
    fontSize: 11,
    color: "#1769E0",
    fontWeight: "700",
    marginTop: 3,
  },

  navIcon: {
    fontSize: 21,
    color: "#9CA3AF",
  },

  navText: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 3,
  },
});