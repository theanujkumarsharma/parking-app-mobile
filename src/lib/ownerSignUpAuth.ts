import { supabase } from "@/lib/supabase";

interface OwnerSignUpParams {
  email: string;
  password: string;
  confirmPassword: string;
  ownerName: string;
  phone: string;
  parkingName: string;
  parkingAddress: string;
}

interface OwnerSignUpResult {
  success: boolean;
  message: string;
  user?: any;
}

const ownerSignUp = async ({
  email,
  password,
  confirmPassword,
  ownerName,
  phone,
  parkingName,
  parkingAddress,
}: OwnerSignUpParams): Promise<OwnerSignUpResult> => {
  // Check password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return {
      success: false,
      message: "Passwords do not match",
    };
  }

  // Create owner account in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  // Handle signup error
  if (error) {
    console.error("Signup error:", error);
    alert(error.message);
    return {
      success: false,
      message: "Owner signup failed. Please try again.",
    };
  }

  // Make sure user was created
  const user = data.user;

  if (!user) {
    return {
      success: false,
      message: "Owner signup failed. Please try again.",
    };
  }

  // Create owner profile
  const { error: profileError } = await supabase.from("owner_profiles").insert({
    id: user.id,
    owner_name: ownerName,
    email: email,
    phone: phone,
  });

  // Handle profile creation error
  if (profileError) {
    console.error("Profile creation error:", profileError);
    alert(profileError.message);
    return {
      success: false,
      message: "Failed to create owner profile.",
    };
  }

  // Create parking space
  const { error: parkingError } = await supabase.from("parking_spaces").insert({
    owner_id: user.id,
    parking_name: parkingName,
    parking_address: parkingAddress,
  });

  // Handle parking space creation error
  if (parkingError) {
    console.error("Parking space creation error:", parkingError);
    alert(parkingError.message);
    return {
      success: false,
      message: "Failed to create parking space.",
    };
  }

  alert("Owner account created successfully!");

  return{
    success: true,
    message: "Owner account created successfully.",
    user,
  };
};

export default ownerSignUp;
