import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const bookings = [
  {
    id: "BK001",
    customer: "Raj Sharma",
    parking: "My Parking",
    location: "Cyber City",
    slot: "A12",
    date: "Today",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    duration: "2 hours",
    amount: "₹100",
    status: "Confirmed",
    vehicle: "🚗 Car",
    number: "DL 01 AB 1234",
  },
  {
    id: "BK002",
    customer: "Amit Kumar",
    parking: "My Parking",
    location: "Cyber City",
    slot: "B04",
    date: "Today",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    duration: "2 hours",
    amount: "₹100",
    status: "Confirmed",
    vehicle: "🚗 Car",
    number: "HR 26 CD 5678",
  },
  {
    id: "BK003",
    customer: "Priya Singh",
    parking: "My Parking",
    location: "Cyber City",
    slot: "C07",
    date: "Tomorrow",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    duration: "2 hours",
    amount: "₹100",
    status: "Upcoming",
    vehicle: "🏍 Bike",
    number: "HR 26 EF 9012",
  },
  {
    id: "BK004",
    customer: "Rohit Verma",
    parking: "My Parking",
    location: "Cyber City",
    slot: "A03",
    date: "08 Sep 2026",
    startTime: "11:00 AM",
    endTime: "01:00 PM",
    duration: "2 hours",
    amount: "₹100",
    status: "Completed",
    vehicle: "🚗 Car",
    number: "DL 03 GH 4567",
  },
];

export default function OwnerBookings() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/owner/home")}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Bookings</Text>
          <Text style={styles.subtitle}>
            Manage your parking bookings
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text>▣</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Statistics */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Upcoming</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₹200</Text>
            <Text style={styles.statLabel}>Today's Earnings</Text>
          </View>
        </View>

        {/* Tabs */}

        <View style={styles.tabs}>
          {["All", "Confirmed", "Upcoming", "Completed"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Booking count */}

        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>
            {activeTab === "All"
              ? "All Bookings"
              : `${activeTab} Bookings`}
          </Text>

          <Text style={styles.bookingCount}>
            {filteredBookings.length}
          </Text>
        </View>

        {/* Booking cards */}

        {filteredBookings.map((booking) => (
          <TouchableOpacity
            key={booking.id}
            style={styles.bookingCard}
            activeOpacity={0.85}
          >
            {/* Customer */}

            <View style={styles.bookingHeader}>
              <View style={styles.customerContainer}>
                <View style={styles.customerAvatar}>
                  <Text style={styles.avatarText}>
                    {booking.customer.charAt(0)}
                  </Text>
                </View>

                <View>
                  <Text style={styles.customerName}>
                    {booking.customer}
                  </Text>

                  <Text style={styles.bookingId}>
                    Booking #{booking.id}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  booking.status === "Completed" &&
                    styles.completedBadge,
                  booking.status === "Upcoming" &&
                    styles.upcomingBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    booking.status === "Completed" &&
                      styles.completedText,
                    booking.status === "Upcoming" &&
                      styles.upcomingText,
                  ]}
                >
                  {booking.status}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Parking */}

            <View style={styles.parkingRow}>
              <View style={styles.parkingIcon}>
                <Text>🅿️</Text>
              </View>

              <View style={styles.parkingInfo}>
                <Text style={styles.parkingName}>
                  {booking.parking}
                </Text>

                <Text style={styles.location}>
                  📍 {booking.location}
                </Text>
              </View>

              <View style={styles.slotContainer}>
                <Text style={styles.slotLabel}>Slot</Text>
                <Text style={styles.slotNumber}>
                  {booking.slot}
                </Text>
              </View>
            </View>

            {/* Time */}

            <View style={styles.timeContainer}>
              <View style={styles.timeItem}>
                <Text style={styles.timeLabel}>Date</Text>
                <Text style={styles.timeValue}>
                  📅 {booking.date}
                </Text>
              </View>

              <View style={styles.timeItem}>
                <Text style={styles.timeLabel}>Time</Text>
                <Text style={styles.timeValue}>
                  🕐 {booking.startTime} - {booking.endTime}
                </Text>
              </View>
            </View>

            {/* Vehicle */}

            <View style={styles.vehicleContainer}>
              <View>
                <Text style={styles.smallLabel}>Vehicle</Text>
                <Text style={styles.vehicleText}>
                  {booking.vehicle}
                </Text>
              </View>

              <View>
                <Text style={styles.smallLabel}>
                  Vehicle Number
                </Text>
                <Text style={styles.vehicleText}>
                  {booking.number}
                </Text>
              </View>
            </View>

            {/* Amount */}

            <View style={styles.amountContainer}>
              <Text style={styles.amountLabel}>
                Booking Amount
              </Text>

              <Text style={styles.amount}>
                {booking.amount}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {filteredBookings.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📅</Text>

            <Text style={styles.emptyTitle}>
              No bookings found
            </Text>

            <Text style={styles.emptyText}>
              Bookings for your parking space will appear here.
            </Text>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace("/owner/home")}
        >
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>▣</Text>
          <Text style={styles.navTextActive}>
            Bookings
          </Text>
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
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    fontSize: 25,
    color: "#1769E0",
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 3,
  },

  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    paddingHorizontal: 20,
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1769E0",
  },

  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },

  tabs: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 4,
    flexDirection: "row",
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 9,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#1769E0",
  },

  tabText: {
    fontSize: 10,
    color: "#6B7280",
    fontWeight: "600",
  },

  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: "800",
    color: "#111827",
  },

  bookingCount: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#EAF2FF",
    color: "#1769E0",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    fontWeight: "700",
  },

  bookingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  bookingHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  customerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  customerAvatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#1769E0",
    fontSize: 17,
    fontWeight: "800",
  },

  customerName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginLeft: 11,
  },

  bookingId: {
    fontSize: 10,
    color: "#9CA3AF",
    marginLeft: 11,
    marginTop: 3,
  },

  statusBadge: {
    backgroundColor: "#DCFCE7",
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  statusText: {
    color: "#15803D",
    fontSize: 10,
    fontWeight: "700",
  },

  completedBadge: {
    backgroundColor: "#F3F4F6",
  },

  completedText: {
    color: "#6B7280",
  },

  upcomingBadge: {
    backgroundColor: "#EAF2FF",
  },

  upcomingText: {
    color: "#1769E0",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  parkingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  parkingIcon: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  parkingInfo: {
    flex: 1,
    marginLeft: 11,
  },

  parkingName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  location: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 4,
  },

  slotContainer: {
    alignItems: "flex-end",
  },

  slotLabel: {
    fontSize: 10,
    color: "#9CA3AF",
  },

  slotNumber: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1769E0",
    marginTop: 3,
  },

  timeContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F9FC",
    borderRadius: 11,
    padding: 12,
    marginTop: 14,
    gap: 15,
  },

  timeItem: {
    flex: 1,
  },

  timeLabel: {
    fontSize: 10,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  timeValue: {
    fontSize: 11,
    fontWeight: "600",
    color: "#374151",
  },

  vehicleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    paddingHorizontal: 2,
  },

  smallLabel: {
    fontSize: 10,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  vehicleText: {
    fontSize: 11,
    color: "#374151",
    fontWeight: "600",
  },

  amountContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginTop: 14,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  amountLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  amount: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 35,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  emptyText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 18,
    marginTop: 7,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 20,
    color: "#9CA3AF",
  },

  navIconActive: {
    fontSize: 20,
    color: "#1769E0",
  },

  navText: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 3,
  },

  navTextActive: {
    fontSize: 10,
    color: "#1769E0",
    fontWeight: "700",
    marginTop: 3,
  },
});