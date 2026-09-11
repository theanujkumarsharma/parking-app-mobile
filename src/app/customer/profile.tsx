import { router } from "expo-router";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function CustomerProfile() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Rahul Sharma");
  const [email, setEmail] = useState("rahul@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");

  const handleSave = () => {
    setEditing(false);

    Alert.alert(
      "Profile Updated",
      "Your profile information has been updated."
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => router.replace("/"),
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

        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            if (editing) {
              handleSave();
            } else {
              setEditing(true);
            }
          }}
        >
          <Text style={styles.editText}>
            {editing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.profileName}>{name}</Text>

          <View style={styles.customerBadge}>
            <Text style={styles.customerBadgeText}>
              🚗 Customer
            </Text>
          </View>

          <Text style={styles.memberText}>
            Member since September 2026
          </Text>
        </View>

        {/* Personal Information */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Personal Information
          </Text>

          {/* Name */}

          <View style={styles.field}>
            <Text style={styles.label}>Full Name</Text>

            {editing ? (
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#9CA3AF"
              />
            ) : (
              <View style={styles.infoRow}>
                <Text style={styles.infoIcon}>👤</Text>

                <Text style={styles.infoText}>
                  {name}
                </Text>
              </View>
            )}
          </View>

          {/* Email */}

          <View style={styles.field}>
            <Text style={styles.label}>Email Address</Text>

            {editing ? (
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
              />
            ) : (
              <View style={styles.infoRow}>
                <Text style={styles.infoIcon}>✉️</Text>

                <Text style={styles.infoText}>
                  {email}
                </Text>
              </View>
            )}
          </View>

          {/* Phone */}

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number</Text>

            {editing ? (
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="Enter phone number"
                placeholderTextColor="#9CA3AF"
              />
            ) : (
              <View style={styles.infoRow}>
                <Text style={styles.infoIcon}>📱</Text>

                <Text style={styles.infoText}>
                  {phone}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Activity */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            My Activity
          </Text>

          {/* Bookings */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              router.push("/customer/bookings")
            }
          >
            <View style={styles.menuIcon}>
              <Text>📅</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                My Bookings
              </Text>

              <Text style={styles.menuSubtitle}>
                View your current and past bookings
              </Text>
            </View>

            <View style={styles.countBadge}>
              <Text style={styles.countText}>2</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          {/* Favorites */}

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>♡</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                Saved Parking
              </Text>

              <Text style={styles.menuSubtitle}>
                Your favorite parking spaces
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Settings */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Settings
          </Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔔</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                Notifications
              </Text>

              <Text style={styles.menuSubtitle}>
                Manage booking notifications
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>💳</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                Payment Methods
              </Text>

              <Text style={styles.menuSubtitle}>
                Manage your saved payment methods
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>🔒</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                Change Password
              </Text>

              <Text style={styles.menuSubtitle}>
                Update your account password
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>❓</Text>
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>
                Help & Support
              </Text>

              <Text style={styles.menuSubtitle}>
                Get help with your account
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutIcon}>↪</Text>

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

        <Text style={styles.version}>
          ParkU • Version 1.0.0
        </Text>

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
          onPress={() =>
            router.push("/customer/bookings")
          }
        >
          <Text style={styles.navIcon}>▣</Text>

          <Text style={styles.navText}>
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>●</Text>

          <Text style={styles.navTextActive}>
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
    height: 65,
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

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },

  editButton: {
    minWidth: 45,
    alignItems: "flex-end",
  },

  editText: {
    fontSize: 14,
    color: "#1769E0",
    fontWeight: "700",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 25,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#1769E0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  profileName: {
    fontSize: 21,
    fontWeight: "800",
    color: "#111827",
  },

  customerBadge: {
    backgroundColor: "#EEF4FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
  },

  customerBadgeText: {
    color: "#1769E0",
    fontSize: 11,
    fontWeight: "700",
  },

  memberText: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 9,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 18,
  },

  field: {
    marginBottom: 18,
  },

  label: {
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 7,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 13,
    color: "#111827",
    fontSize: 14,
  },

  infoRow: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcon: {
    fontSize: 17,
    width: 32,
  },

  infoText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 52,
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,
    backgroundColor: "#F3F6FA",
    justifyContent: "center",
    alignItems: "center",
  },

  menuContent: {
    flex: 1,
    marginLeft: 12,
  },

  menuTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },

  menuSubtitle: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 3,
  },

  countBadge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  countText: {
    color: "#1769E0",
    fontSize: 10,
    fontWeight: "700",
  },

  arrow: {
    fontSize: 26,
    color: "#9CA3AF",
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  logoutButton: {
    height: 52,
    borderRadius: 13,
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutIcon: {
    fontSize: 20,
    color: "#DC2626",
    marginRight: 8,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 15,
    fontWeight: "700",
  },

  version: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 10,
    marginTop: 15,
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