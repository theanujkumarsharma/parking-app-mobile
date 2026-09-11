import { router, useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const dates = [
  {
    day: "Today",
    date: "12",
    month: "Sep",
  },
  {
    day: "Tomorrow",
    date: "13",
    month: "Sep",
  },
  {
    day: "Sunday",
    date: "14",
    month: "Sep",
  },
  {
    day: "Monday",
    date: "15",
    month: "Sep",
  },
];

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function ParkingDetails() {
  const params = useLocalSearchParams();

  const parkingName =
    typeof params.name === "string"
      ? params.name
      : "Covered Parking";

  const price =
    typeof params.price === "string"
      ? Number(params.price)
      : 50;

  const [selectedDate, setSelectedDate] =
    useState("Today");

  const [selectedTime, setSelectedTime] =
    useState("10:00 AM");

  const handleContinue = () => {
    router.push({
      pathname: "/customer/select-slot",
      params: {
        id: params.id || "1",
        name: parkingName,
        price: price.toString(),
        date: selectedDate,
        time: selectedTime,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Parking Details
        </Text>

        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteText}>♡</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Parking Image */}

        <View style={styles.imageContainer}>
          <View style={styles.imageBackground}>
            <Text style={styles.bigParkingIcon}>
              🅿️
            </Text>

            <Text style={styles.imageText}>
              PARKING
            </Text>
          </View>

          <View style={styles.imageBadge}>
            <Text style={styles.imageBadgeText}>
              {params.id === "2"
                ? "Private"
                : "Covered"}
            </Text>
          </View>
        </View>

        {/* Parking Name */}

        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <View style={styles.titleInfo}>
              <Text style={styles.parkingName}>
                {parkingName}
              </Text>

              <Text style={styles.location}>
                📍 Cyber City, Gurugram
              </Text>
            </View>

            <View style={styles.ratingBox}>
              <Text style={styles.rating}>
                ★ 4.7
              </Text>

              <Text style={styles.reviews}>
                124 reviews
              </Text>
            </View>
          </View>
        </View>

        {/* Price / Availability */}

        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>
              PRICE
            </Text>

            <View style={styles.priceRow}>
              <Text style={styles.price}>
                ₹{price}
              </Text>

              <Text style={styles.perHour}>
                /hour
              </Text>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statLabel}>
              AVAILABLE
            </Text>

            <Text style={styles.available}>
              8 slots
            </Text>

            <Text style={styles.capacity}>
              out of 12
            </Text>
          </View>
        </View>

        {/* Features */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Parking Features
          </Text>

          <View style={styles.featuresGrid}>
            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Text>🏠</Text>
              </View>

              <Text style={styles.featureText}>
                Covered
              </Text>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Text>📹</Text>
              </View>

              <Text style={styles.featureText}>
                CCTV
              </Text>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Text>🛡️</Text>
              </View>

              <Text style={styles.featureText}>
                Security
              </Text>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Text>🕐</Text>
              </View>

              <Text style={styles.featureText}>
                24/7 Access
              </Text>
            </View>
          </View>
        </View>

        {/* Description */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            About this parking
          </Text>

          <Text style={styles.description}>
            Convenient and secure parking space located
            in Cyber City. The parking area is well
            maintained and monitored with CCTV cameras.
            Perfect for both short and long stays.
          </Text>
        </View>

        {/* Date */}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Select Date
            </Text>

            <Text style={styles.required}>
              Required
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateContainer}
          >
            {dates.map((item) => {
              const selected =
                selectedDate === item.day;

              return (
                <TouchableOpacity
                  key={item.day}
                  style={[
                    styles.dateCard,
                    selected &&
                      styles.dateCardSelected,
                  ]}
                  onPress={() =>
                    setSelectedDate(item.day)
                  }
                >
                  <Text
                    style={[
                      styles.dateDay,
                      selected &&
                        styles.dateTextSelected,
                    ]}
                  >
                    {item.day}
                  </Text>

                  <Text
                    style={[
                      styles.dateNumber,
                      selected &&
                        styles.dateTextSelected,
                    ]}
                  >
                    {item.date}
                  </Text>

                  <Text
                    style={[
                      styles.dateMonth,
                      selected &&
                        styles.dateTextSelected,
                    ]}
                  >
                    {item.month}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Time */}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Select Start Time
            </Text>

            <Text style={styles.required}>
              Required
            </Text>
          </View>

          <View style={styles.timeGrid}>
            {times.map((time) => {
              const selected =
                selectedTime === time;

              return (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeButton,
                    selected &&
                      styles.timeButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedTime(time)
                  }
                >
                  <Text
                    style={[
                      styles.timeText,
                      selected &&
                        styles.timeTextSelected,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Duration */}

        <View style={styles.durationCard}>
          <View>
            <Text style={styles.durationTitle}>
              Parking Duration
            </Text>

            <Text style={styles.durationSubtitle}>
              You can change this on the next step
            </Text>
          </View>

          <View style={styles.durationValue}>
            <Text style={styles.durationNumber}>
              1
            </Text>

            <Text style={styles.durationHour}>
              hour
            </Text>
          </View>
        </View>

        {/* Continue */}

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <View>
            <Text style={styles.continuePrice}>
              ₹{price}
              <Text style={styles.continuePerHour}>
                /hour
              </Text>
            </Text>

            <Text style={styles.continueText}>
              Select Parking Slot
            </Text>
          </View>

          <Text style={styles.continueArrow}>
            →
          </Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
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
    height: 65,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
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
    color: "#1769E0",
    fontSize: 24,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 19,
    fontWeight: "800",
    color: "#111827",
  },

  favoriteButton: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#FFF1F2",
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteText: {
    color: "#E11D48",
    fontSize: 23,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  imageContainer: {
    height: 190,
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    marginBottom: 15,
  },

  imageBackground: {
    flex: 1,
    backgroundColor: "#DCE7F1",
    justifyContent: "center",
    alignItems: "center",
  },

  bigParkingIcon: {
    fontSize: 58,
  },

  imageText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#64748B",
    letterSpacing: 2,
    marginTop: 5,
  },

  imageBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  imageBadgeText: {
    fontSize: 9,
    color: "#1769E0",
    fontWeight: "700",
  },

  titleSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleInfo: {
    flex: 1,
  },

  parkingName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },

  location: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 6,
  },

  ratingBox: {
    alignItems: "flex-end",
  },

  rating: {
    fontSize: 13,
    color: "#111827",
    fontWeight: "800",
  },

  reviews: {
    fontSize: 8,
    color: "#9CA3AF",
    marginTop: 3,
  },

  statsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 18,
  },

  statItem: {
    flex: 1,
  },

  statLabel: {
    fontSize: 8,
    color: "#9CA3AF",
    fontWeight: "700",
    marginBottom: 5,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  price: {
    fontSize: 21,
    fontWeight: "800",
    color: "#1769E0",
  },

  perHour: {
    fontSize: 9,
    color: "#6B7280",
    marginLeft: 2,
  },

  available: {
    fontSize: 17,
    color: "#15803D",
    fontWeight: "800",
  },

  capacity: {
    fontSize: 8,
    color: "#9CA3AF",
    marginTop: 2,
  },

  verticalDivider: {
    width: 1,
    height: 42,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 18,
  },

  section: {
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  required: {
    fontSize: 9,
    color: "#1769E0",
    fontWeight: "600",
  },

  featuresGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  feature: {
    width: "23%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  featureIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  featureText: {
    fontSize: 8,
    color: "#374151",
    fontWeight: "600",
  },

  description: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    fontSize: 11,
    color: "#6B7280",
    lineHeight: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  dateContainer: {
    gap: 9,
  },

  dateCard: {
    width: 72,
    height: 82,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  dateCardSelected: {
    backgroundColor: "#1769E0",
    borderColor: "#1769E0",
  },

  dateDay: {
    fontSize: 8,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  dateNumber: {
    fontSize: 23,
    color: "#111827",
    fontWeight: "800",
    marginTop: 2,
  },

  dateMonth: {
    fontSize: 8,
    color: "#6B7280",
  },

  dateTextSelected: {
    color: "#FFFFFF",
  },

  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  timeButton: {
    width: "23%",
    minHeight: 39,
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  timeButtonSelected: {
    backgroundColor: "#EEF4FF",
    borderColor: "#1769E0",
  },

  timeText: {
    fontSize: 9,
    color: "#6B7280",
    fontWeight: "600",
  },

  timeTextSelected: {
    color: "#1769E0",
    fontWeight: "800",
  },

  durationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 15,
  },

  durationTitle: {
    fontSize: 12,
    color: "#111827",
    fontWeight: "700",
  },

  durationSubtitle: {
    fontSize: 9,
    color: "#9CA3AF",
    marginTop: 4,
  },

  durationValue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    borderRadius: 9,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },

  durationNumber: {
    fontSize: 14,
    color: "#1769E0",
    fontWeight: "800",
  },

  durationHour: {
    fontSize: 9,
    color: "#1769E0",
    marginLeft: 4,
  },

  continueButton: {
    backgroundColor: "#1769E0",
    minHeight: 66,
    borderRadius: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  continuePrice: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  continuePerHour: {
    fontSize: 9,
    fontWeight: "500",
  },

  continueText: {
    color: "#DCEAFF",
    fontSize: 10,
    marginTop: 3,
  },

  continueArrow: {
    color: "#FFFFFF",
    fontSize: 26,
  },
});