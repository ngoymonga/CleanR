import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import IconAD from "react-native-vector-icons/AntDesign";
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import { Link } from "expo-router";
import Validation from "utilities/validations";

type RouteParams = {
  user_type: number;
};

type NavigationProps = {
  navigate: (screen: string, params?: any) => void;
};

export default function Login(): JSX.Element {
  const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
  const navigation = useNavigation<NavigationProps>();

  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [userType, setUserType] = useState<number>(route.params.user_type);
  const [code, setCode] = useState<string>("kleenapp12345");
  const [deviceType, setDeviceType] = useState<string>("android");
  const [fbUserName, setFbUserName] = useState<string | undefined>();
  const [fbUserID, setFbUserID] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();
  //   const [devicesToken, setDevicesToken] = useState<string | undefined>(
  //     global.device_token
  //   );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [category, setCategory] = useState<any>();

  const signins = async (): Promise<void> => {
    let valid = true;
    if (!email || Validation.isEmpty(email)) {
      setEmailError("Email is required");
      valid = false;
    } else if (!Validation.isEmailValid(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError(undefined);
    }
    if (!password || Validation.isEmpty(password)) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!Validation.isPasswordValid(password)) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError(undefined);
    }

    if (valid) {
      // Proceed with the sign-in logic
      ////  navigation.navigate("Home");
    }
  };

  const signIn = async (): Promise<void> => {};

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          height: Dimensions.get("window").height * 0.3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/login.png")}
          style={{ width: 300, height: 120 }}
        />
      </View>
      <View style={{ height: 90, justifyContent: "flex-start", width: "90%" }}>
        <Text style={{ color: "#1C1154", fontSize: 30, fontWeight: "700" }}>
          Account Log In
        </Text>
        <Text style={{ color: "#282828", marginTop: 8 }}>
          Enter your registered phone number or email Id to Login.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
            onChangeText={(value) => {
              setEmail(value);
              if (!value || Validation.isEmpty(value)) {
                setEmailError("Email is required");
              } else if (!Validation.isEmailValid(value)) {
                setEmailError("Please enter a valid email");
              } else {
                setEmailError(undefined);
              }
            }}
            value={email}
            style={styles.input}
          />

          <IconE name="mail" size={22} color="#00BAF5" />
        </View>
        {emailError && <Text style={styles.error}>{emailError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor="#A9A9A9"
            onChangeText={(value) => {
              setPassword(value);
              if (!value || Validation.isEmpty(value)) {
                setPasswordError("Password is required");
              } else if (!Validation.isPasswordValid(value)) {
                setPasswordError("Password must be at least 6 characters");
              } else {
                setPasswordError(undefined);
              }
            }}
            value={password}
            style={styles.input}
          />

          <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
              <IconI name="eye-off-sharp" size={22} color="#00BAF5" />
            ) : (
              <IconAD name="eye" size={22} color="#00BAF5" />
            )}
          </TouchableOpacity>
        </View>
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}
      </View>

      <View
        style={{
          height: 100,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={styles.signview} onPress={signins}>
          <Link href={"/Home"}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>
              Login
            </Text>
          </Link>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 25,
        }}
      >
        <Text style={styles.signup}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Register", { user_type: userType })
          }
        >
          <Link href={"/account/Register"}>
            <Text style={{ color: "#00BAF5", fontSize: 18, fontWeight: "600" }}>
              {" "}
              Register
            </Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 5,
  },
  inputContainer: {
    width: "95%",
    marginTop: 10,
  },
  label: {
    color: "#000",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#00BAF5",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  input: {
    width: "90%",
    color: "#000",
    height: 40,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  signInButton: {
    backgroundColor: "#00BAF5",
    borderRadius: 5,
    padding: 10,
    width: "95%",
    alignItems: "center",
  },
  signInText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  signup: {
    color: "#282828",
    fontSize: 18,
    fontWeight: "700",
  },

  signview: {
    width: "95%",
    backgroundColor: "#00BAF5",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
