import { supabase } from "@/lib/supabase";

interface OwnerLoginParams {
    email: string;
    password: string;
}

interface OwnerLoginResult {
    success: boolean;
    error: string | null;
    message: string;
    user?: any;
    profile?: any;
}

const ownerLogin = async ({ email, password }: OwnerLoginParams): Promise<OwnerLoginResult> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "LOGIN_FAILED",
      message: error.message,
      user: null,
      profile: null,
    };
  }

  const user = data.user;
  if (!user) {
    return {
      success: false,
      error: "USER_NOT_FOUND",
      message: "Login failed. Please try again.",
      user: null,
      profile: null,
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("owner_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Profile fetch error:", profileError);
    return {
      success: false,
      error: "PROFILE_NOT_FOUND",
      message: "Owner profile could not be loaded.",
      user,
      profile: null,
    };
  }

  return {
    success: true,
    error: null,
    message: "Login successful.",
    user,
    profile,
  };
};

export default ownerLogin;
