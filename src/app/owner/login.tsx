import { router } from "expo-router";
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
import {useState} from "react";
import ownerLogin from "@/lib/ownerLogin";

export default function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) { 
      Alert.alert("Missing Information", "Please enter email and password."); 
      return;
  }

  try{
    const result = await ownerLogin({
      email: email.trim(), 
      password});

      if(!result.success){
        Alert.alert("Login Failed", result.message);
        return;
      }
      router.replace("/owner/home");
  }catch(error){
    console.error("Login error:", error);
    Alert.alert("Login Error", "An error occurred during login. Please try again.");
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
            <Text style={styles.icon}>🅿️</Text>
          </View>

          <Text style={styles.title}>Parking Owner Login</Text>

          <Text style={styles.subtitle}>Login to manage your parking</Text>

          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
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

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => router.push("/owner/signup")}>
              <Text style={styles.signupLink}> Register Parking</Text>
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
    color: "#1769E0",
    fontSize: 16,
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
    fontSize: 27,
    fontWeight: "800",
    textAlign: "center",
    color: "#111827",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 35,
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

  button: {
    height: 52,
    backgroundColor: "#1769E0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
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
