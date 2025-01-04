import React, { useRef, useState, useEffect } from "react";
import { View, Alert, Text, TouchableOpacity, Image } from "react-native";
import {
  useNavigation,
  useRoute,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { Link } from "expo-router";

// Define the types for navigation params
type RootStackParamList = {
  Login: { user_type: number };
  UserHome: undefined;
  ProviderHome: undefined;
};

export const SelectAccount = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1C1154",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1C1154",
        }}
      >
        <Image
          source={require("../../assets/backlogo.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          width: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ height: 30, justifyContent: "center", width: "90%" }}>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            Hello!
          </Text>
        </View>
        <View style={{ height: 30, justifyContent: "center", width: "90%" }}>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            Which You Like To Enter As:?
          </Text>
        </View>
        <View
          style={{
            height: 90,
            justifyContent: "space-evenly",
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login", { user_type: 1 })}
            style={{
              backgroundColor: "#00BAF5",
              height: 60,
              justifyContent: "center",
              width: "40%",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Link href={"account/Login"}>
              <Text style={{ fontWeight: "700", color: "#FFF", fontSize: 14 }}>
                AS USER
              </Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login", { user_type: 2 })}
            style={{
              backgroundColor: "#1C1154",
              height: 60,
              justifyContent: "center",
              width: "42%",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
            }}
          >
            <Link href={"account/Login"}>
              <Text style={{ fontWeight: "700", color: "#FFF", fontSize: 14 }}>
                {" "}
                AS PROVIDER
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,
            justifyContent: "center",
            width: "90%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>
            Please Choose one of the options above.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SelectAccount;
