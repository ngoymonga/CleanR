import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Dimensions,
  Alert,
  BackHandler,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import IconAD from "react-native-vector-icons/AntDesign";
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
//import Modal from "react-native-modal";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Link } from "expo-router";
import Validation from "utilities/validations";

const Register = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();

  useEffect(() => {}, []);

  const backAction = () => {};
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [image, setImage] = useState();
  const [password, setPassword] = useState<string>();
  const [passwords, setPasswords] = useState();
  const [phone, setPhone] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState("");
  const [device_type, setDevice_type] = useState("mobile");
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [path, setPath] = useState();
  const [imgData, setImgData] = useState();
  const [address, setAddress] = useState();
  const [showMale, setShowMale] = useState(false);
  const [showFeMale, setShowFeMale] = useState(false);
  const [getaddress, setGetaddress] = useState();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | undefined>();
  const [nameError, setNameError] = useState<string | undefined>();
  const screen = Dimensions.get("window");
  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.04;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const signIn = async () => {};

  const pickImage = async () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: false,
      storageOptions: {
        skipBackup: true,
      },
    };

    setModalVisible(false);
  };

  const pickImagec = async () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: false,
      storageOptions: {
        skipBackup: true,
      },
    };

    setModalVisible(false);
  };

  const signup = async () => {


    
  };

  const [state, setState] = useState({
    curLoc: {
      latitude: 22.7196,
      longitude: 75.8577,
    },
    destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 22.7196,
      longitude: 75.8577,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const updateState = (data: {
    destinationCords:
      | {}
      | {
          latitude: React.SetStateAction<undefined>;
          longitude: React.SetStateAction<undefined>;
          data: { description: React.SetStateAction<undefined> };
        };
    curLoc?: { latitude: number; longitude: number };
    isLoading?: boolean;
    coordinate?: any;
    time?: number;
    distance?: number;
    heading?: number;
  }) => setState((state) => ({ ...state, ...data }));
  const ChooseLocations = () => {};

  const fetchValue = (data: {
    destinationCords: {
      data: { description: React.SetStateAction<undefined> };
      latitude: React.SetStateAction<undefined>;
      longitude: React.SetStateAction<undefined>;
    };
  }) => {
    setGetaddress(data.destinationCords.data.description);
    setLatitude(data.destinationCords.latitude);
    setLongitude(data.destinationCords.longitude);
    updateState({
      destinationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude,
        data: data.destinationCords.data,
      },
    });
  };

  const toggleMale = () => {
    setGender("male");
    setShowMale(true);
    setShowFeMale(false);
  };

  const toggleFeMale = () => {
    setGender("female");
    setShowFeMale(true);
    setShowMale(false);
  };

  const pickImages = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            height: 150,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/signup.png")}
            style={{ width: 310, height: 100 }}
          />
        </View>
        <View
          style={{ height: 90, justifyContent: "flex-start", width: "90%" }}
        >
          <Text style={{ color: "#1C1154", fontSize: 25, fontWeight: "700" }}>
            Create Account
          </Text>
          <Text style={{ color: "#282828", marginTop: 10 }}>
            consectetur adipiscing elit estibulum sectetur sit amet.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: "100%",
            height: 600,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
       

          <View style={styles.inputContainer}>
          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000", paddingBottom:20 }}>Enter Your Full Name</Text>
          </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#00BAF5",
                borderWidth: 1,
                width: "95%",
                alignItems: "center",
                paddingStart: 5,
              }}
            >
              <TextInput
                placeholder="Name"
                onChangeText={(value: any) => {
                  setName(value);
                  if (!value || Validation.isEmpty(value)) {
                    setNameError("Name is required");
                  } else {
                    setNameError(undefined);
                  }
                }}
                value={name}
                placeholderTextColor={"#282828"}
                style={{ width: "90%", height: 50 }}
              />
              {/* <IconI name="person" size={22} color={'#00BAF5'}/> */}
            </View>

            {nameError && <Text style={styles.error}>{nameError}</Text>}
          </View>

          

          <View style={styles.inputContainer}>
          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000", paddingBottom:20 }}>Mobile Number</Text>
          </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#00BAF5",
                borderWidth: 1,
                width: "95%",
                alignItems: "center",
                paddingStart: 5,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: 45,
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 0,
                  backgroundColor: "#FFF",
                }}
              >
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{ height: 30, backgroundColor: "#FFF", padding: 5 }}
                >
                  <Text style={{ color: "#000", fontSize: 14, paddingTop: 2 }}>
                    {countryCode}
                  </Text>
                </TouchableOpacity>
                <CountryPicker
                  show={show}
                  pickerButtonOnPress={(item: {
                    dial_code: React.SetStateAction<string>;
                  }) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                  }}
                  lang={""}
                />
                <TextInput
                  keyboardType="numeric"
                  placeholderTextColor={"#282828"}
                  placeholder="Mobile number"
                  value={phone}
                  onChangeText={(value: any) => {
                    setPhone(value);
                    if (!value || Validation.isEmpty(value)) {
                      setPhoneError("Phone number is required");
                    } else {
                      setPhoneError(undefined);
                    }
                  }}
                  style={{ fontSize: 15, color: "#282828", width: "95%" }}
                />
              </View>
            </View>
            {phoneError && <Text style={styles.error}>{phoneError}</Text>}
          </View>

      

          <View style={styles.inputContainer}>
          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000", paddingBottom:20 }}>Email ID</Text>
          </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#00BAF5",
                borderWidth: 1,
                width: "95%",
                alignItems: "center",
                paddingStart: 5,
              }}
            >
              <TextInput
                placeholder="Email"
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
                style={{ width: "90%", height: 50 }}
                placeholderTextColor={"#282828"}
              />
            </View>
            {emailError && <Text style={styles.error}>{emailError}</Text>}
          </View>

          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000" , paddingBottom:10, paddingTop: 10}}>Gender</Text>
          </View>

          <View style={{ width: "95%", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => toggleMale()}
              style={{
                flexDirection: "row",
                borderRadius: 4,
                borderColor: "#00BAF5",
                borderWidth: 1,
                height: 50,
                alignItems: "center",
                width: "30%",
                paddingLeft: 10,
              }}
            >
              {showMale === true ? (
                <IconI name="radio-button-on" size={22} color={"#00BAF5"} />
              ) : (
                <IconI name="radio-button-off" size={22} color={"#7A858D"} />
              )}
              <Text>Male</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 20, width: "90%" }}>
              <TouchableOpacity
                onPress={() => toggleFeMale()}
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderColor: "#00BAF5",
                  borderWidth: 1,
                  height: 50,
                  alignItems: "center",
                  width: "30%",
                  paddingLeft: 10,
                }}
              >
                {showFeMale === true ? (
                  <IconI name="radio-button-on" size={22} color={"#00BAF5"} />
                ) : (
                  <IconI name="radio-button-off" size={22} color={"#7A858D"} />
                )}
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          </View>

          {route.params.user_type == 2 ? (
            <View style={{ width: "95%" }}></View>
          ) : null}
        

          <View style={styles.inputContainer}>
          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000" , paddingBottom:20}}>Password</Text>
          </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#00BAF5",
                borderWidth: 1,
                width: "95%",
                height: 50,
                alignItems: "center",
                paddingStart: 5,
              }}
            >
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
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
                style={{ width: "90%", color: "#000" }}
                placeholderTextColor={"#A9A9A9"}
              />

              <TouchableOpacity onPress={toggleShowPassword}>
                {showPassword == true ? (
                  <IconI name="eye-off-sharp" size={22} color={"#1C1154"} />
                ) : (
                  <IconAD name="eye" size={22} color={"#1C1154"} />
                )}
              </TouchableOpacity>
            </View>

            {passwordError && <Text style={styles.error}>{passwordError}</Text>}
          </View>

         

          <View style={styles.inputContainer}>
          <View style={{ width: "95%" }}>
            <Text style={{ color: "#000", paddingBottom:20 }}>Confirm Password</Text>
          </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 5,
                borderColor: "#00BAF5",
                borderWidth: 1,
                width: "95%",
                height: 50,
                alignItems: "center",
                paddingStart: 5,
              }}
            >
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={!showPasswords}
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
                value={passwords}
                style={{ width: "90%", color: "#000" }}
                placeholderTextColor={"#A9A9A9"}
              />
              <TouchableOpacity onPress={toggleShowPasswords}>
                {showPasswords == true ? (
                  <IconI name="eye-off-sharp" size={22} color={"#1C1154"} />
                ) : (
                  <IconAD name="eye" size={22} color={"#1C1154"} />
                )}
              </TouchableOpacity>
            </View>
            {passwordError && <Text style={styles.error}>{passwordError}</Text>}
          </View>
        </View>
        <View
          style={{
            height: 70,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <TouchableOpacity style={styles.signview} onPress={() => signup()}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={styles.signup}>Already have an account?</Text>

          <TouchableOpacity>
            <Link href={"/account/Login"}>
              <Text
                style={{ color: "#00BAF5", fontSize: 18, fontWeight: "600" }}
              >
                {" "}
                Login
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    //justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: "95%",
    marginTop: 10,
  },
  padview2: {
    alignItems: "flex-end",
  },
  midtext: {
    width: "75%",
    justifyContent: "flex-start",
  },
  emailtext: {
    justifyContent: "flex-start",
    width: "100%",
    fontSize: 12,
    fontWeight: "900",
  },
  radiob: {
    flexDirection: "row",
    color: "#00ff00",
  },
  padview: {
    paddingTop: 5,
    width: "80%",
  },
  logo1: {
    fontSize: 25,
    color: "black",
    textAlign: "right",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  login: {
    color: "black",
    backgroundColor: "rgba(39, 39, 39, 1)",
    width: "95%",
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

export default Register;
