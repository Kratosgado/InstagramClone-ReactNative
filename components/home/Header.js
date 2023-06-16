import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require('../../assets/header-logo.png')}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    }
})