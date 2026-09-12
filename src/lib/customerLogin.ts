import { supabase } from "@/lib/supabase";

interface CustomerLoginParams {
  email: string;
  password: string;
}

interface CustomerLoginResult {
  success: boolean; 
  message: string;
  user?: any;
  profile?: any;
}

const customerLogin = async ({ email, password }: CustomerLoginParams): Promise<CustomerLoginResult> => {
  try {
    // Login customer
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // Handle login error
    if (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: error.message,
      };
    }

    // Make sure user exists
    const user = data?.user;
    if (!user) {
      return {
        success: false,
        message: "Login failed. Please try again.",
      };
    }

    // Get customer profile
    const { data: profile, error: profileError } = await supabase
      .from("customer_profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    // Handle profile error
    if (profileError) {
      console.error("Profile fetch error:", profileError);
      return {
        success: false,
        message: "Customer profile could not be loaded.",
      };
    }
    // Optional: check whether profile exists
    if (!profile) {
      return {
        success: false,
        message: "Customer profile not found.",
      };
    }
    // Login successful
    return {
      success: true,
      message: "Login successful.",
      user,
      profile,
    };
  } catch (error) {
    console.error("Unexpected login error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};

export default customerLogin;
