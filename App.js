import { StatusBar } from "expo-status-bar";
import React from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvbA1p_3E-UA2rB8SMOk57wV5bGNhQTKM",
  authDomain: "instagramclone-ace32.firebaseapp.com",
  projectId: "instagramclone-ace32",
  storageBucket: "instagramclone-ace32.appspot.com",
  messagingSenderId: "999955971826",
  appId: "1:999955971826:web:3247b8069d85c4f838da6b",
  measurementId: "G-VWP1H8NZP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import LandingScreen from './components/auth/Landing'
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}