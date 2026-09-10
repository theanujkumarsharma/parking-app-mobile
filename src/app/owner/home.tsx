import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const parkingSpaces = [
  {
    id: "1",
    name: "My Parking",
    location: "Cyber City",
    price: "₹50/hour",
    status: "Active",
    slots: "12 slots",
  },
];

export default function OwnerHome() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Owner Dashboard</Text>
          <Text style={styles.subtitle}>
            Manage your parking spaces
          </Text>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/owner/profile")}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Summary */}

        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {parkingSpaces.length}
            </Text>
            <Text style={styles.summaryLabel}>
              Parking Spaces
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>0</Text>
            <Text style={styles.summaryLabel}>
              Today's Bookings
            </Text>
          </View>
        </View>

        {/* Parking heading */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Your Parking Spaces
          </Text>

          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Parking Spaces */}

        {parkingSpaces.length > 0 ? (
          parkingSpaces.map((parking) => (
            <TouchableOpacity
              key={parking.id}
              style={styles.parkingCard}
              activeOpacity={0.8}
            >
              <View style={styles.cardTop}>
                <View style={styles.parkingIcon}>
                  <Text style={styles.parkingEmoji}>🅿️</Text>
                </View>

                <View style={styles.parkingInfo}>
                  <Text style={styles.parkingName}>
                    {parking.name}
                  </Text>

                  <Text style={styles.location}>
                    📍 {parking.location}
                  </Text>
                </View>

                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>
                    {parking.status}
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.cardBottom}>
                <View>
                  <Text style={styles.infoLabel}>Price</Text>
                  <Text style={styles.infoValue}>
                    {parking.price}
                  </Text>
                </View>

                <View>
                  <Text style={styles.infoLabel}>Capacity</Text>
                  <Text style={styles.infoValue}>
                    {parking.slots}
                  </Text>
                </View>

                <Text style={styles.arrow}>›</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🅿️</Text>

            <Text style={styles.emptyTitle}>
              No parking spaces yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first parking space and start
              accepting bookings.
            </Text>
          </View>
        )}

        {/* Add Parking */}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/owner/add-parking")}
        >
          <Text style={styles.addIcon}>＋</Text>
          <Text style={styles.addButtonText}>
            Add Parking Space
          </Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.activeNavIcon}>⌂</Text>
          <Text style={styles.activeNavText}>
            Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/owner/bookings")}
        >
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/owner/earnings")}
        >
          <Text style={styles.navIcon}>₹</Text>
          <Text style={styles.navText}>Earnings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/owner/profile")}
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
    paddingTop: 15,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
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
    fontSize: 21,
  },

  content: {
    paddingHorizontal: 22,
  },

  summaryContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  summaryNumber: {
    fontSize: 25,
    fontWeight: "800",
    color: "#1769E0",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },

  viewAll: {
    color: "#1769E0",
    fontSize: 13,
    fontWeight: "600",
  },

  parkingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  parkingIcon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  parkingEmoji: {
    fontSize: 24,
  },

  parkingInfo: {
    flex: 1,
    marginLeft: 13,
  },

  parkingName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  location: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },

  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#15803D",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15,
  },

  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoLabel: {
    fontSize: 11,
    color: "#9CA3AF",
  },

  infoValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginTop: 3,
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },

  addButton: {
    height: 55,
    borderWidth: 1.5,
    borderColor: "#1769E0",
    borderStyle: "dashed",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  addIcon: {
    fontSize: 23,
    color: "#1769E0",
    marginRight: 7,
  },

  addButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1769E0",
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 18,
  },

  emptyIcon: {
    fontSize: 38,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  emptyText: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 7,
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
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 5,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeNavIcon: {
    fontSize: 22,
    color: "#1769E0",
  },

  activeNavText: {
    fontSize: 10,
    color: "#1769E0",
    fontWeight: "700",
    marginTop: 3,
  },

  navIcon: {
    fontSize: 20,
    color: "#9CA3AF",
  },

  navText: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 3,
  },
});