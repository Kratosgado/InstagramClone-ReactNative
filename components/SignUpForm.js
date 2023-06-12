import React from "react";
import {
    Pressable,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    Platform
} from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup'
import Validator from "email-validator";
import { getAuth, createUserWithEmailAndPassword, getFirestore, setDoc, doc } from '../firebase'

const signUpFormSchema = Yup.object().shape({
    email: Yup.string().required('An is required'),
    username: Yup.string().required('A user is required'),
    password: Yup.string().required().min(6, 'Password needs to be at least 6 characters long'),
})

const SignUpForm = ({ navigation }) => {
    const auth = getAuth()
    const db = getFirestore()

    const getRandomUserPicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[ 0 ].picture.large
    }
    const onSignup = async (email, password, username) => {
        try {
            const authed = await createUserWithEmailAndPassword(auth, email, password)
            console.log('Firebase Signed Up Successful')

            const userDocRef = doc(db, 'users', authed.user.email)
            await setDoc(userDocRef, {
                username,
                email,
                pic: await getRandomUserPicture(),
                uid: authed.user.uid,
            })
        } catch (error) {
            Platform.OS != 'web' ? Alert.alert(error.message) : alert(error.message)
        }
    }
    return (
        <View style={sty}
    )
}