// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createClient } from "@supabase/supabase-js";
// import "react-native-url-polyfill/auto";

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

// if(!supabaseUrl || !supabaseKey){
//   throw new Error("Supabase URL or Key is not defined in environment variables.");
// }

// export const supabase = createClient(
//   supabaseUrl,
//   supabaseKey,
//   {
//     auth: {
//       storage: AsyncStorage,

//       autoRefreshToken: true,

//       persistSession: true,

//       detectSessionInUrl: false,
//     },
//   },
// );

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Key is not defined in environment variables.",
  );
}

const storage = {
  getItem: async (key: string) => {
    if (typeof window === "undefined") {
      return null;
    }

    return AsyncStorage.getItem(key);
  },

  setItem: async (key: string, value: string) => {
    if (typeof window === "undefined") {
      return;
    }

    await AsyncStorage.setItem(key, value);
  },

  removeItem: async (key: string) => {
    if (typeof window === "undefined") {
      return;
    }

    await AsyncStorage.removeItem(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
