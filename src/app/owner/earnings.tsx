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

const transactions = [
  {
    id: "TXN001",
    customer: "Raj Sharma",
    parking: "My Parking",
    date: "Today, 12:05 PM",
    amount: "₹100",
    status: "Completed",
  },
  {
    id: "TXN002",
    customer: "Amit Kumar",
    parking: "My Parking",
    date: "Today, 04:10 PM",
    amount: "₹100",
    status: "Completed",
  },
  {
    id: "TXN003",
    customer: "Priya Singh",
    parking: "My Parking",
    date: "09 Sep 2026",
    amount: "₹150",
    status: "Completed",
  },
  {
    id: "TXN004",
    customer: "Rohit Verma",
    parking: "My Parking",
    date: "08 Sep 2026",
    amount: "₹100",
    status: "Completed",
  },
];

export default function OwnerEarnings() {
  const [period, setPeriod] = useState("This Month");

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
          <Text style={styles.title}>Earnings</Text>
          <Text style={styles.subtitle}>
            Track your parking revenue
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>₹</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Total Earnings */}

        <View style={styles.totalCard}>
          <View style={styles.totalTop}>
            <View>
              <Text style={styles.totalLabel}>
                Total Earnings
              </Text>

              <Text style={styles.totalAmount}>
                ₹2,450
              </Text>

              <View style={styles.growthRow}>
                <Text style={styles.growthIcon}>↗</Text>

                <Text style={styles.growthText}>
                  12.5% from last month
                </Text>
              </View>
            </View>

            <View style={styles.rupeeCircle}>
              <Text style={styles.rupeeIcon}>₹</Text>
            </View>
          </View>
        </View>

        {/* Period Selector */}

        <View style={styles.periodContainer}>
          {["This Week", "This Month", "This Year"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.periodButton,
                  period === item &&
                    styles.periodButtonActive,
                ]}
                onPress={() => setPeriod(item)}
              >
                <Text
                  style={[
                    styles.periodText,
                    period === item &&
                      styles.periodTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Summary Cards */}

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryIcon}>
              <Text>📅</Text>
            </View>

            <Text style={styles.summaryValue}>
              24
            </Text>

            <Text style={styles.summaryLabel}>
              Bookings
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryIcon}>
              <Text>₹</Text>
            </View>

            <Text style={styles.summaryValue}>
              ₹102
            </Text>

            <Text style={styles.summaryLabel}>
              Avg. Booking
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryIcon}>
              <Text>🅿️</Text>
            </View>

            <Text style={styles.summaryValue}>
              1
            </Text>

            <Text style={styles.summaryLabel}>
              Parking
            </Text>
          </View>
        </View>

        {/* Revenue Chart */}

        <View style={styles.card}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Revenue Overview
              </Text>

              <Text style={styles.chartSubtitle}>
                Earnings for {period.toLowerCase()}
              </Text>
            </View>

            <Text style={styles.chartTotal}>
              ₹2,450
            </Text>
          </View>

          <View style={styles.chart}>
            {/* Y Axis */}

            <View style={styles.yAxis}>
              <Text style={styles.axisText}>₹800</Text>
              <Text style={styles.axisText}>₹600</Text>
              <Text style={styles.axisText}>₹400</Text>
              <Text style={styles.axisText}>₹200</Text>
              <Text style={styles.axisText}>₹0</Text>
            </View>

            {/* Graph */}

            <View style={styles.graphArea}>
              <View style={styles.gridLine1} />
              <View style={styles.gridLine2} />
              <View style={styles.gridLine3} />
              <View style={styles.gridLine4} />

              <View style={styles.bars}>
                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 48 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Mon</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 75 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Tue</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 55 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Wed</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 95 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Thu</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 70 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Fri</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 110 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Sat</Text>
                </View>

                <View style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      { height: 85 },
                    ]}
                  />
                  <Text style={styles.barLabel}>Sun</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Parking Performance */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Parking Performance
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push("/owner/home")
              }
            >
              <Text style={styles.viewText}>
                View Space
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.parkingPerformance}>
            <View style={styles.parkingPerformanceIcon}>
              <Text>🅿️</Text>
            </View>

            <View style={styles.performanceInfo}>
              <Text style={styles.performanceName}>
                My Parking
              </Text>

              <Text style={styles.performanceLocation}>
                📍 Cyber City
              </Text>
            </View>

            <View style={styles.performanceAmount}>
              <Text style={styles.performanceValue}>
                ₹2,450
              </Text>

              <Text style={styles.performanceLabel}>
                earned
              </Text>
            </View>
          </View>

          <View style={styles.performanceStats}>
            <View>
              <Text style={styles.statLabel}>
                Bookings
              </Text>

              <Text style={styles.statValue}>
                24
              </Text>
            </View>

            <View>
              <Text style={styles.statLabel}>
                Occupancy
              </Text>

              <Text style={styles.statValue}>
                68%
              </Text>
            </View>

            <View>
              <Text style={styles.statLabel}>
                Avg. Price
              </Text>

              <Text style={styles.statValue}>
                ₹102
              </Text>
            </View>
          </View>
        </View>

        {/* Transactions */}

        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>
            Recent Transactions
          </Text>

          <TouchableOpacity>
            <Text style={styles.viewText}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {transactions.map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            style={styles.transactionCard}
            activeOpacity={0.8}
          >
            <View style={styles.transactionIcon}>
              <Text>₹</Text>
            </View>

            <View style={styles.transactionInfo}>
              <Text style={styles.transactionCustomer}>
                {transaction.customer}
              </Text>

              <Text style={styles.transactionParking}>
                {transaction.parking} •{" "}
                {transaction.date}
              </Text>

              <Text style={styles.transactionId}>
                {transaction.id}
              </Text>
            </View>

            <View style={styles.transactionAmount}>
              <Text style={styles.amount}>
                +{transaction.amount}
              </Text>

              <Text style={styles.completed}>
                {transaction.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.noteContainer}>
          <Text style={styles.noteIcon}>ⓘ</Text>

          <Text style={styles.noteText}>
            Earnings shown are based on completed
            bookings. Platform fees and taxes will be
            calculated when payments are connected.
          </Text>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            router.replace("/owner/home")
          }
        >
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navText}>
            Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            router.push("/owner/bookings")
          }
        >
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>₹</Text>
          <Text style={styles.navTextActive}>
            Earnings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() =>
            router.push("/owner/profile")
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
    fontSize: 20,
    fontWeight: "800",
    color: "#1769E0",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  totalCard: {
    backgroundColor: "#1769E0",
    borderRadius: 20,
    padding: 22,
    marginBottom: 15,
  },

  totalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    color: "#DCEAFF",
    fontSize: 13,
    fontWeight: "600",
  },

  totalAmount: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    marginTop: 5,
  },

  growthRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  growthIcon: {
    color: "#FFFFFF",
    fontSize: 15,
    marginRight: 5,
  },

  growthText: {
    color: "#DCEAFF",
    fontSize: 11,
  },

  rupeeCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  rupeeIcon: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
  },

  periodContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 15,
  },

  periodButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 9,
  },

  periodButtonActive: {
    backgroundColor: "#EEF4FF",
  },

  periodText: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "600",
  },

  periodTextActive: {
    color: "#1769E0",
    fontWeight: "700",
  },

  summaryRow: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 15,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 13,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  summaryIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  summaryValue: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  summaryLabel: {
    fontSize: 9,
    color: "#9CA3AF",
    marginTop: 3,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  chartSubtitle: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 4,
  },

  chartTotal: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1769E0",
  },

  chart: {
    height: 190,
    flexDirection: "row",
    marginTop: 15,
  },

  yAxis: {
    width: 42,
    justifyContent: "space-between",
    paddingBottom: 25,
  },

  axisText: {
    fontSize: 8,
    color: "#9CA3AF",
  },

  graphArea: {
    flex: 1,
    position: "relative",
    marginLeft: 5,
  },

  gridLine1: {
    position: "absolute",
    top: 5,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
  },

  gridLine2: {
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
  },

  gridLine3: {
    position: "absolute",
    top: 85,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
  },

  gridLine4: {
    position: "absolute",
    top: 125,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F3",
  },

  bars: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },

  barContainer: {
    height: 160,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  bar: {
    width: 20,
    backgroundColor: "#1769E0",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  barLabel: {
    fontSize: 8,
    color: "#9CA3AF",
    marginTop: 7,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  viewText: {
    fontSize: 11,
    color: "#1769E0",
    fontWeight: "700",
  },

  parkingPerformance: {
    flexDirection: "row",
    alignItems: "center",
  },

  parkingPerformanceIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  performanceInfo: {
    flex: 1,
    marginLeft: 11,
  },

  performanceName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  performanceLocation: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 4,
  },

  performanceAmount: {
    alignItems: "flex-end",
  },

  performanceValue: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },

  performanceLabel: {
    fontSize: 9,
    color: "#9CA3AF",
    marginTop: 2,
  },

  performanceStats: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginTop: 15,
    paddingTop: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statLabel: {
    fontSize: 9,
    color: "#9CA3AF",
  },

  statValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginTop: 4,
  },

  transactionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  transactionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 13,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
  },

  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#ECFDF5",
    justifyContent: "center",
    alignItems: "center",
  },

  transactionInfo: {
    flex: 1,
    marginLeft: 11,
  },

  transactionCustomer: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },

  transactionParking: {
    fontSize: 9,
    color: "#6B7280",
    marginTop: 4,
  },

  transactionId: {
    fontSize: 8,
    color: "#9CA3AF",
    marginTop: 3,
  },

  transactionAmount: {
    alignItems: "flex-end",
  },

  amount: {
    fontSize: 14,
    fontWeight: "800",
    color: "#15803D",
  },

  completed: {
    fontSize: 8,
    color: "#15803D",
    marginTop: 4,
  },

  noteContainer: {
    backgroundColor: "#EEF6FF",
    borderRadius: 11,
    padding: 12,
    flexDirection: "row",
    marginTop: 5,
  },

  noteIcon: {
    color: "#1769E0",
    fontSize: 14,
    marginRight: 7,
  },

  noteText: {
    flex: 1,
    color: "#2563EB",
    fontSize: 10,
    lineHeight: 15,
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