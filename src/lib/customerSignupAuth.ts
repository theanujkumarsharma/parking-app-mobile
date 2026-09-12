import { supabase } from "@/lib/supabase";

interface CustomerSignUpParams {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phone: string;
}

interface CustomerSignUpResult {
  success: boolean;
  message: string;
  user?: any;
}

const customerSignUp = async ({
  email,
  password,
  confirmPassword,
  fullName,
  phone,
}: CustomerSignUpParams): Promise<CustomerSignUpResult> => {
  // Check password confirmation
  if (password !== confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match",
    };
  }

  // Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  // Handle signup error
  if (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      message: error.message,
    };
  }

  // Make sure user was created
  const user = data.user;

  if (!user) {
    return {
      success: false,
      message: "User signup failed. Please try again.",
    };
  }

  // Insert additional customer information
  const { error: profileError } = await supabase
    .from("customer_profiles")
    .insert({
      id: user.id,
      full_name: fullName,
      email: email,
      phone: phone,
    });

  // Handle profile insertion error
  if (profileError) {
    console.error("Profile creation error:", profileError);
    alert(profileError.message);
    return{
      success: false,
      message: "Failed to create customer profile.",
    };
  }

  alert("Customer account created successfully!");

  return {
    success: true,
    message: "Customer account created successfully.",
    user,
  };
};

export default customerSignUp;
