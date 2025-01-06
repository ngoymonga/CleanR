import React, { FC } from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { NavigationProp } from "@react-navigation/native";
import { Link } from "expo-router/build/link/Link";
import { Provider } from "react-redux";
import store from "redux/store";

const { width } = Dimensions.get("window");

interface Slide {
  title: string;
  subtitle: string;
  image: any; // Change to a stricter type if possible
}

interface AppProps {
  navigation: NavigationProp<any>;
}

const OboardingScreen: FC<AppProps> = ({ navigation }) => {
  const slides: Slide[] = [
    {
      title: "Welcome To CleanX",
      subtitle:
        "Experiences hassle-free and top-notch cleaning\n services at your fingerprint.",
      image: require("./../assets/1111.png"),
    },
    {
      title: "Comprehensive Services",
      subtitle:
        "From deep cleaning to regular maintenance\n we offer a wide range of cleaning service\n tailored to your needs",
      image: require("./../assets/2222.png"),
    },
    {
      title: "Book in Seconds",
      subtitle:
        "With our-user friendly app, booking a cleaner\n has never been easier. Get your home shining\n in just a few taps!",
      image: require("./../assets/1111.png"),
    },
  ];

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SwiperFlatList
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          paginationDefaultColor="#1C1154"
          paginationActiveColor="#00BAF5"
        >
          {slides.map((slide, index) => (
            <View
              key={index}
              style={[styles.child, { backgroundColor: "#FFF" }]}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                
                  style={{
                    flexDirection: "row-reverse",
                    width: "95%",
                    height: 60,
                    alignItems: "center",
                  }}
                >
                  <Link href={"/account/SelectAccount"}>
                    <Text style={{ color: "#000", fontSize: 15 }}>Skip</Text>
                  </Link>
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 300,
                  }}
                >
                  <Image
                    source={slide.image}
                    style={{ width: 300, height: 300 }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 80,
                  }}
                >
                  <Text
                    style={{ fontSize: 25, fontWeight: "800", color: "#000" }}
                  >
                    {slide.title}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, color: "#000", textAlign: "center" }}
                  >
                    {slide.subtitle}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </SwiperFlatList>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "orange", width: "100%" },
  child: { justifyContent: "center", width },
  text: { fontSize: 18, textAlign: "center", color: "#000" },
});

export default OboardingScreen;
