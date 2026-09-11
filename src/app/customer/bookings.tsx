import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

const upcomingBookings = [
  {
    id: "PKU001",
    parking: "Covered Parking",
    location: "Cyber City, Gurugram",
    date: "12 Sep 2026",
    time: "10:00 AM - 12:00 PM",
    slot: "A-12",
    amount: 100,
    status: "Confirmed",
  },
  {
    id: "PKU002",
    parking: "Private Parking",
    location: "MG Road, Gurugram",
    date: "15 Sep 2026",
    time: "02:00 PM - 04:00 PM",
    slot: "B-05",
    amount: 60,
    status: "Confirmed",
  },
];

const completedBookings = [
  {
    id: "PKC001",
    parking: "My Parking",
    location: "Cyber City, Gurugram",
    date: "08 Sep 2026",
    time: "11:00 AM - 01:00 PM",
    slot: "A-08",
    amount: 100,
    status: "Completed",
  },
  {
    id: "PKC002",
    parking: "City Center Parking",
    location: "Sector 29, Gurugram",
    date: "05 Sep 2026",
    time: "06:00 PM - 08:00 PM",
    slot: "C-03",
    amount: 140,
    status: "Completed",
  },
  {
    id: "PKC003",
    parking: "Covered Parking",
    location: "Cyber City, Gurugram",
    date: "01 Sep 2026",
    time: "09:00 AM - 10:00 AM",
    slot: "A-04",
    amount: 50,
    status: "Completed",
  },
];

export default function CustomerBookings() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings =
    activeTab === "Upcoming"
      ? upcomingBookings
      : completedBookings;

  const cancelBooking = (id: string) => {
    Alert.alert(
      "Cancel Booking",
      "Are you sure you want to cancel this booking?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes, Cancel",
          style: "destructive",
          onPress: () => {
            Alert.alert(
              "Booking Cancelled",
              `Booking ${id} has been cancelled.`
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/customer/home")}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>My Bookings</Text>
          <Text style={styles.subtitle}>
            Manage your parking bookings
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>▣</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Tabs */}

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Upcoming" &&
                styles.activeTab,
            ]}
            onPress={() => setActiveTab("Upcoming")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Upcoming" &&
                  styles.activeTabText,
              ]}
            >
              Upcoming
            </Text>

            <View
              style={[
                styles.tabCount,
                activeTab === "Upcoming" &&
                  styles.activeTabCount,
              ]}
            >
              <Text
                style={[
                  styles.tabCountText,
                  activeTab === "Upcoming" &&
                    styles.activeTabCountText,
                ]}
              >
                {upcomingBookings.length}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Completed" &&
                styles.activeTab,
            ]}
            onPress={() => setActiveTab("Completed")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Completed" &&
                  styles.activeTabText,
              ]}
            >
              Completed
            </Text>

            <View
              style={[
                styles.tabCount,
                activeTab === "Completed" &&
                  styles.activeTabCount,
              ]}
            >
              <Text
                style={[
                  styles.tabCountText,
                  activeTab === "Completed" &&
                    styles.activeTabCountText,
                ]}
              >
                {completedBookings.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Booking count */}

        <View style={styles.resultHeader}>
          <Text style={styles.resultText}>
            {bookings.length}{" "}
            {activeTab.toLowerCase()} bookings
          </Text>

          <TouchableOpacity>
            <Text style={styles.filterText}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>

        {/* Empty state */}

        {bookings.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIcon}>
              <Text>🅿️</Text>
            </View>

            <Text style={styles.emptyTitle}>
              No bookings yet
            </Text>

            <Text style={styles.emptySubtitle}>
              Your {activeTab.toLowerCase()} parking
              bookings will appear here.
            </Text>

            <TouchableOpacity
              style={styles.findButton}
              onPress={() =>
                router.replace("/customer/home")
              }
            >
              <Text style={styles.findButtonText}>
                Find Parking
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          bookings.map((booking) => (
            <View
              key={booking.id}
              style={styles.bookingCard}
            >
              {/* Card Header */}

              <View style={styles.cardHeader}>
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

                <View
                  style={[
                    styles.statusBadge,
                    booking.status === "Completed"
                      ? styles.completedBadge
                      : styles.confirmedBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      booking.status === "Completed"
                        ? styles.completedText
                        : styles.confirmedText,
                    ]}
                  >
                    {booking.status}
                  </Text>
                </View>
              </View>

              {/* Divider */}

              <View style={styles.divider} />

              {/* Date / Time */}

              <View style={styles.detailsRow}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>
                    📅
                  </Text>

                  <View>
                    <Text style={styles.detailLabel}>
                      Date
                    </Text>

                    <Text style={styles.detailValue}>
                      {booking.date}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>
                    🕐
                  </Text>

                  <View>
                    <Text style={styles.detailLabel}>
                      Time
                    </Text>

                    <Text style={styles.detailValue}>
                      {booking.time}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Slot / Amount */}

              <View style={styles.detailsRow}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>
                    🎟️
                  </Text>

                  <View>
                    <Text style={styles.detailLabel}>
                      Parking Slot
                    </Text>

                    <Text style={styles.detailValue}>
                      {booking.slot}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>
                    ₹
                  </Text>

                  <View>
                    <Text style={styles.detailLabel}>
                      Amount Paid
                    </Text>

                    <Text style={styles.amountValue}>
                      ₹{booking.amount}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Booking ID */}

              <View style={styles.bookingIdRow}>
                <Text style={styles.bookingIdLabel}>
                  Booking ID
                </Text>

                <Text style={styles.bookingId}>
                  {booking.id}
                </Text>
              </View>

              {/* Action */}

              {booking.status === "Confirmed" ? (
                <View style={styles.actionRow}>
                  <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => {
                      Alert.alert(
                        "Booking Details",
                        `Booking ${booking.id}\n\n${booking.parking}\n${booking.date}\n${booking.time}\nSlot ${booking.slot}`
                      );
                    }}
                  >
                    <Text style={styles.viewButtonText}>
                      View Details
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() =>
                      cancelBooking(booking.id)
                    }
                  >
                    <Text style={styles.cancelButtonText}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.viewCompletedButton}
                  onPress={() => {
                    Alert.alert(
                      "Booking Details",
                      `Booking ${booking.id}\n\n${booking.parking}\n${booking.date}\n${booking.time}\nSlot ${booking.slot}\nAmount ₹${booking.amount}`
                    );
                  }}
                >
                  <Text style={styles.viewCompletedText}>
                    View Booking Details
                  </Text>

                  <Text style={styles.arrow}>
                    ›
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}

        {/* Find Parking */}

        {activeTab === "Upcoming" && (
          <TouchableOpacity
            style={styles.findParkingCard}
            onPress={() =>
              router.replace("/customer/home")
            }
          >
            <View style={styles.findParkingIcon}>
              <Text>🔍</Text>
            </View>

            <View style={styles.findParkingContent}>
              <Text style={styles.findParkingTitle}>
                Need another parking space?
              </Text>

              <Text style={styles.findParkingSubtitle}>
                Find and book parking near you
              </Text>
            </View>

            <Text style={styles.findParkingArrow}>
              →
            </Text>
          </TouchableOpacity>
        )}

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            router.replace("/customer/home")
          }
        >
          <Text style={styles.navIcon}>⌂</Text>

          <Text style={styles.navText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
        >
          <Text style={styles.navIconActive}>
            ▣
          </Text>

          <Text style={styles.navTextActive}>
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            router.push("/customer/profile")
          }
        >
          <Text style={styles.navIcon}>●</Text>

          <Text style={styles.navText}>
            Profile
          </Text>
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
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    fontSize: 24,
    color: "#1769E0",
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 21,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 11,
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

  headerIconText: {
    fontSize: 19,
    color: "#1769E0",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  tabsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#EEF4FF",
  },

  tabText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
  },

  activeTabText: {
    color: "#1769E0",
    fontWeight: "700",
  },

  tabCount: {
    minWidth: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },

  activeTabCount: {
    backgroundColor: "#1769E0",
  },

  tabCountText: {
    fontSize: 9,
    color: "#6B7280",
    fontWeight: "700",
  },

  activeTabCountText: {
    color: "#FFFFFF",
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 10,
  },

  resultText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
  },

  filterText: {
    fontSize: 11,
    color: "#1769E0",
    fontWeight: "700",
  },

  bookingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  parkingIcon: {
    width: 48,
    height: 48,
    borderRadius: 13,
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
    fontWeight: "800",
    color: "#111827",
  },

  location: {
    fontSize: 9,
    color: "#6B7280",
    marginTop: 4,
  },

  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  confirmedBadge: {
    backgroundColor: "#ECFDF5",
  },

  completedBadge: {
    backgroundColor: "#F3F4F6",
  },

  statusText: {
    fontSize: 9,
    fontWeight: "700",
  },

  confirmedText: {
    color: "#15803D",
  },

  completedText: {
    color: "#6B7280",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  detailsRow: {
    flexDirection: "row",
    marginBottom: 14,
  },

  detailItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  detailIcon: {
    fontSize: 16,
    width: 30,
  },

  detailLabel: {
    fontSize: 8,
    color: "#9CA3AF",
  },

  detailValue: {
    fontSize: 10,
    color: "#374151",
    fontWeight: "600",
    marginTop: 3,
  },

  amountValue: {
    fontSize: 12,
    color: "#1769E0",
    fontWeight: "800",
    marginTop: 3,
  },

  bookingIdRow: {
    backgroundColor: "#F7F9FC",
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  bookingIdLabel: {
    fontSize: 8,
    color: "#9CA3AF",
  },

  bookingId: {
    fontSize: 8,
    color: "#6B7280",
    fontWeight: "700",
  },

  actionRow: {
    flexDirection: "row",
    gap: 9,
  },

  viewButton: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1769E0",
    justifyContent: "center",
    alignItems: "center",
  },

  viewButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },

  cancelButton: {
    width: 85,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelButtonText: {
    color: "#DC2626",
    fontSize: 11,
    fontWeight: "700",
  },

  viewCompletedButton: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F7F9FC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
  },

  viewCompletedText: {
    fontSize: 11,
    color: "#1769E0",
    fontWeight: "700",
  },

  arrow: {
    fontSize: 22,
    color: "#9CA3AF",
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 45,
    paddingHorizontal: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  emptyIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    marginTop: 15,
  },

  emptySubtitle: {
    fontSize: 11,
    color: "#9CA3AF",
    textAlign: "center",
    lineHeight: 17,
    marginTop: 7,
  },

  findButton: {
    backgroundColor: "#1769E0",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 11,
    marginTop: 17,
  },

  findButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },

  findParkingCard: {
    backgroundColor: "#1769E0",
    borderRadius: 15,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  findParkingIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  findParkingContent: {
    flex: 1,
    marginLeft: 11,
  },

  findParkingTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  findParkingSubtitle: {
    color: "#DCEAFF",
    fontSize: 9,
    marginTop: 3,
  },

  findParkingArrow: {
    color: "#FFFFFF",
    fontSize: 22,
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
    fontSize: 21,
    color: "#9CA3AF",
  },

  navIconActive: {
    fontSize: 21,
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