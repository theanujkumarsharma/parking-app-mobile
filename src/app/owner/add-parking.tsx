import { router } from "expo-router";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function AddParking() {
  const [parkingName, setParkingName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [price, setPrice] = useState("");
  const [totalSlots, setTotalSlots] = useState("");
  const [vehicleType, setVehicleType] = useState("Cars, Bikes");
  const [openTime, setOpenTime] = useState("08:00 AM");
  const [closeTime, setCloseTime] = useState("10:00 PM");

  const [days, setDays] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });

  const toggleDay = (day: keyof typeof days) => {
    setDays((previous) => ({
      ...previous,
      [day]: !previous[day],
    }));
  };

  const handleUseLocation = () => {
    Alert.alert(
      "Location",
      "Current location will be connected when we add GPS functionality."
    );
  };

  const handleAddParking = () => {
    if (!parkingName || !address || !city || !price || !totalSlots) {
      Alert.alert(
        "Missing Information",
        "Please fill in all required fields."
      );
      return;
    }

    Alert.alert(
      "Parking Space",
      "Parking space is ready to be added. We will connect this to the database next."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/owner/home")}
        >
          <Text style={styles.backText}>← Back to Dashboard</Text>
        </TouchableOpacity>

        {/* Header */}

        <Text style={styles.title}>Add Parking Space</Text>

        <Text style={styles.subtitle}>
          Fill in the details to list your parking space.
        </Text>

        {/* BASIC INFORMATION */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>🏢</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Basic Information
              </Text>

              <Text style={styles.sectionSubtitle}>
                Enter the basic details of your parking space
              </Text>
            </View>
          </View>

          <Text style={styles.label}>
            Parking Name <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            style={styles.input}
            value={parkingName}
            onChangeText={setParkingName}
            placeholder="e.g. My Parking, City Plaza Parking"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Description</Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe your parking space (optional)"
            placeholderTextColor="#9CA3AF"
            multiline
            maxLength={300}
          />

          <Text style={styles.characterCount}>
            {description.length}/300
          </Text>
        </View>

        {/* LOCATION */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>📍</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Location Details
              </Text>

              <Text style={styles.sectionSubtitle}>
                Set the address and location
              </Text>
            </View>
          </View>

          <Text style={styles.label}>
            Address <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            style={[styles.input, styles.addressInput]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter complete address"
            placeholderTextColor="#9CA3AF"
            multiline
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>
                City <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="e.g. Gurugram"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.label}>
                State <Text style={styles.required}>*</Text>
              </Text>

              <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
                placeholder="e.g. Haryana"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>PIN Code</Text>

              <TextInput
                style={styles.input}
                value={pinCode}
                onChangeText={setPinCode}
                placeholder="e.g. 122002"
                placeholderTextColor="#9CA3AF"
                keyboardType="number-pad"
                maxLength={6}
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.label}>Location</Text>

              <TouchableOpacity
                style={styles.locationButton}
                onPress={handleUseLocation}
              >
                <Text style={styles.locationButtonText}>
                  ◎ Use Current Location
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* MAP */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>🗺️</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Location on Map
              </Text>

              <Text style={styles.sectionSubtitle}>
                Set the exact location of your parking
              </Text>
            </View>
          </View>

          <View style={styles.map}>
            <View style={styles.mapRoad1} />
            <View style={styles.mapRoad2} />
            <View style={styles.mapRoad3} />

            <View style={styles.mapArea}>
              <Text style={styles.mapAreaText}>
                MAP
              </Text>
            </View>

            <View style={styles.mapPin}>
              <Text style={styles.mapPinText}>📍</Text>
            </View>

            <Text style={styles.mapLocation}>
              Parking Location
            </Text>
          </View>

          <View style={styles.mapHint}>
            <Text style={styles.mapHintIcon}>ⓘ</Text>

            <Text style={styles.mapHintText}>
              The exact map location will be used by customers
              to find your parking.
            </Text>
          </View>
        </View>

        {/* PRICING */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>₹</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Pricing & Capacity
              </Text>

              <Text style={styles.sectionSubtitle}>
                Set your pricing and total parking slots
              </Text>
            </View>
          </View>

          <Text style={styles.label}>
            Price per hour (₹) <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="e.g. 50"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
          />

          <Text style={styles.label}>
            Total Slots <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            style={styles.input}
            value={totalSlots}
            onChangeText={setTotalSlots}
            placeholder="e.g. 10"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Vehicle Types</Text>

          <View style={styles.vehicleRow}>
            <TouchableOpacity
              style={[
                styles.vehicleButton,
                vehicleType === "Cars" && styles.vehicleButtonActive,
              ]}
              onPress={() => setVehicleType("Cars")}
            >
              <Text
                style={[
                  styles.vehicleText,
                  vehicleType === "Cars" &&
                    styles.vehicleTextActive,
                ]}
              >
                🚗 Cars
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.vehicleButton,
                vehicleType === "Bikes" &&
                  styles.vehicleButtonActive,
              ]}
              onPress={() => setVehicleType("Bikes")}
            >
              <Text
                style={[
                  styles.vehicleText,
                  vehicleType === "Bikes" &&
                    styles.vehicleTextActive,
                ]}
              >
                🏍 Bikes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.vehicleButton,
                vehicleType === "Cars, Bikes" &&
                  styles.vehicleButtonActive,
              ]}
              onPress={() => setVehicleType("Cars, Bikes")}
            >
              <Text
                style={[
                  styles.vehicleText,
                  vehicleType === "Cars, Bikes" &&
                    styles.vehicleTextActive,
                ]}
              >
                Both
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OPERATING HOURS */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>🕐</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Operating Hours
              </Text>

              <Text style={styles.sectionSubtitle}>
                Set the working hours for your parking
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Open Time *</Text>

              <TextInput
                style={styles.input}
                value={openTime}
                onChangeText={setOpenTime}
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.label}>Close Time *</Text>

              <TextInput
                style={styles.input}
                value={closeTime}
                onChangeText={setCloseTime}
              />
            </View>
          </View>

          <Text style={styles.label}>
            Available Days
          </Text>

          <View style={styles.daysContainer}>
            {(Object.keys(days) as Array<keyof typeof days>).map(
              (day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    days[day] && styles.dayButtonActive,
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <View
                    style={[
                      styles.checkbox,
                      days[day] && styles.checkboxActive,
                    ]}
                  >
                    {days[day] && (
                      <Text style={styles.checkmark}>✓</Text>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.dayText,
                      days[day] && styles.dayTextActive,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        {/* PHOTOS */}

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Text>📷</Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}>
                Photos
              </Text>

              <Text style={styles.sectionSubtitle}>
                Add photos of your parking space (optional)
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.uploadBox}
            onPress={() =>
              Alert.alert(
                "Photos",
                "Photo upload will be connected next."
              )
            }
          >
            <Text style={styles.uploadIcon}>☁️</Text>

            <Text style={styles.uploadTitle}>
              Tap to upload photos
            </Text>

            <Text style={styles.uploadSubtitle}>
              Add clear photos of your parking space
            </Text>

            <Text style={styles.uploadFormat}>
              JPG, PNG up to 5MB each
            </Text>
          </TouchableOpacity>
        </View>

        {/* SUBMIT */}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleAddParking}
          activeOpacity={0.8}
        >
          <Text style={styles.submitIcon}>＋</Text>

          <Text style={styles.submitText}>
            Add Parking Space
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace("/owner/home")}
        >
          <Text style={styles.navIconActive}>⌂</Text>
          <Text style={styles.navTextActive}>
            Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>₹</Text>
          <Text style={styles.navText}>Earnings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
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

  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },

  backButton: {
    marginBottom: 18,
  },

  backText: {
    color: "#1769E0",
    fontSize: 15,
    fontWeight: "600",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  sectionIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  sectionSubtitle: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 3,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
  },

  required: {
    color: "#EF4444",
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 11,
    paddingHorizontal: 13,
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },

  textArea: {
    height: 95,
    paddingTop: 13,
    textAlignVertical: "top",
  },

  characterCount: {
    textAlign: "right",
    color: "#9CA3AF",
    fontSize: 10,
    marginTop: -12,
    marginBottom: 8,
  },

  addressInput: {
    height: 80,
    paddingTop: 13,
    textAlignVertical: "top",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  halfInput: {
    flex: 1,
  },

  locationButton: {
    height: 50,
    borderWidth: 1,
    borderColor: "#1769E0",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  locationButtonText: {
    color: "#1769E0",
    fontSize: 11,
    fontWeight: "700",
  },

  map: {
    height: 210,
    backgroundColor: "#E9EEF3",
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
  },

  mapRoad1: {
    position: "absolute",
    width: "130%",
    height: 25,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "25deg" }],
    top: 80,
    left: -30,
  },

  mapRoad2: {
    position: "absolute",
    width: "130%",
    height: 18,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "-35deg" }],
    top: 125,
    left: -20,
  },

  mapRoad3: {
    position: "absolute",
    width: "130%",
    height: 12,
    backgroundColor: "#D7DEE7",
    transform: [{ rotate: "5deg" }],
    top: 45,
    left: -10,
  },

  mapArea: {
    position: "absolute",
    top: 18,
    left: 18,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },

  mapAreaText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#6B7280",
  },

  mapPin: {
    position: "absolute",
    left: "50%",
    top: "43%",
    marginLeft: -15,
    marginTop: -25,
  },

  mapPinText: {
    fontSize: 35,
  },

  mapLocation: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },

  mapHint: {
    backgroundColor: "#EEF6FF",
    borderRadius: 9,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
  },

  mapHintIcon: {
    color: "#1769E0",
    marginRight: 7,
  },

  mapHintText: {
    flex: 1,
    color: "#2563EB",
    fontSize: 11,
    lineHeight: 16,
  },

  vehicleRow: {
    flexDirection: "row",
    gap: 8,
  },

  vehicleButton: {
    flex: 1,
    height: 43,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  vehicleButtonActive: {
    borderColor: "#1769E0",
    backgroundColor: "#EEF4FF",
  },

  vehicleText: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "600",
  },

  vehicleTextActive: {
    color: "#1769E0",
  },

  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },

  dayButton: {
    width: "23%",
    height: 38,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  dayButtonActive: {
    borderColor: "#1769E0",
    backgroundColor: "#EEF4FF",
  },

  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxActive: {
    backgroundColor: "#1769E0",
    borderColor: "#1769E0",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  dayText: {
    fontSize: 11,
    color: "#6B7280",
  },

  dayTextActive: {
    color: "#1769E0",
    fontWeight: "700",
  },

  uploadBox: {
    minHeight: 145,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#1769E0",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFCFF",
  },

  uploadIcon: {
    fontSize: 32,
    marginBottom: 8,
  },

  uploadTitle: {
    color: "#1769E0",
    fontSize: 14,
    fontWeight: "700",
  },

  uploadSubtitle: {
    color: "#6B7280",
    fontSize: 11,
    marginTop: 5,
  },

  uploadFormat: {
    color: "#9CA3AF",
    fontSize: 10,
    marginTop: 4,
  },

  submitButton: {
    height: 56,
    borderRadius: 13,
    backgroundColor: "#1769E0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },

  submitIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    marginRight: 6,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  bottomSpace: {
    height: 80,
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

  navIconActive: {
    fontSize: 21,
    color: "#1769E0",
  },

  navTextActive: {
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