import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Link, useRouter } from "expo-router";
import Validation from "utilities/validations";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ILoginModel } from "core/models/LoginModel";
import IconAD from "react-native-vector-icons/AntDesign";
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";

import { loginUser } from "redux/authSlice";
import store, { AppDispatch, RootState } from "redux/store";

function Login(): JSX.Element {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const validateInputs = (): boolean => {
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

    return valid;
  };

  const handleLogin = async (): Promise<void> => {
    if (validateInputs()) {
      const model: ILoginModel = {
        email: email,
        password: password,
      };
      dispatch(loginUser(model));
    }
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  if (isLoggedIn) {
    router.push("Home");
  }

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
        <TouchableOpacity style={styles.signview} onPress={handleLogin}>
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
        <TouchableOpacity>
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

const LoginWithProvider = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default LoginWithProvider;

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
