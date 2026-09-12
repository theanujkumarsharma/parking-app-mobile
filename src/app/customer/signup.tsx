import customerSignUp from "@/lib/customerSignupAuth";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CustomerSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Error", "Passwords do not match.");
      return;
    }

    try {
      const result = await customerSignUp({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password,
        confirmPassword,
      });
      if (!result.success) {
        Alert.alert("Registration Failed", result.message);
        return;
      }

      Alert.alert(
        "Registration Successful",
        "Your customer account has been created.",
        [
          {
            text: "Continue",
            onPress: () => router.replace("/customer/login"),
          },
        ],
      );
    } catch (error) {
      console.error("Unexpected signup error:", error);
      Alert.alert(
        "Registration Error",
        "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹ Back to Login</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚗</Text>
          </View>

          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>Sign up as a customer</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => router.push("/customer/login")}>
              <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  keyboard: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },

  backButton: {
    marginBottom: 30,
  },

  backText: {
    color: "#1769E0",
    fontSize: 16,
    fontWeight: "600",
  },

  iconContainer: {
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  icon: {
    fontSize: 36,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    color: "#111827",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 7,
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 18,
  },

  button: {
    height: 52,
    backgroundColor: "#1769E0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },

  loginText: {
    color: "#6B7280",
    fontSize: 14,
  },

  loginLink: {
    color: "#1769E0",
    fontWeight: "700",
    fontSize: 14,
  },
});
