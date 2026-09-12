import customerLogin from "@/lib/customerLogin";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password.",
      );
      return;
    }

    try {
      const result = await customerLogin({
        email: email.trim(),
        password,
      });
      if (!result.success) {
        Alert.alert("Login Failed", result.message);
        return;
      }

      // Login successful
      Alert.alert("Success", "Login successful!", [
        {
          text: "OK",
          onPress: () => router.replace("/customer/home"),
        },
      ]);
    } catch (error) {
      console.error("Unexpected login error:", error);
      Alert.alert("Login Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚗</Text>
          </View>

          <Text style={styles.title}>Customer Login</Text>

          <Text style={styles.subtitle}>Login to find and book parking</Text>

          <View style={styles.form}>
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

            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => router.push("/customer/signup")}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  backButton: {
    position: "absolute",
    top: 20,
    left: 24,
  },

  backText: {
    fontSize: 16,
    color: "#1769E0",
    fontWeight: "600",
  },

  iconContainer: {
    alignSelf: "center",
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  icon: {
    fontSize: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 35,
  },

  form: {
    width: "100%",
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
    marginBottom: 20,
  },

  loginButton: {
    height: 52,
    backgroundColor: "#1769E0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  signupText: {
    color: "#6B7280",
    fontSize: 14,
  },

  signupLink: {
    color: "#1769E0",
    fontSize: 14,
    fontWeight: "700",
  },
});
