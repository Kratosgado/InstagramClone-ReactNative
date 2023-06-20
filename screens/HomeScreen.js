import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import Header from '../components/home/Header'
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

import { POSTS } from '../data/posts';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})