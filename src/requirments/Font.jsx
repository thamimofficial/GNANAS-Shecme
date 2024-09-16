// FontLoader.jsx
import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

// Define a font loader component
const FontLoader = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'Outfit-Thin': require('../../assets/fonts/Outfit-Thin.ttf'),
        'Outfit-ExtraLight': require('../../assets/fonts/Outfit-ExtraLight.ttf'),
        'Outfit-Light': require('../../assets/fonts/Outfit-Light.ttf'),
        'Outfit-Regular': require('../../assets/fonts/Outfit-Regular.ttf'),
        'Outfit-Medium': require('../../assets/fonts/Outfit-Medium.ttf'),
        'Outfit-SemiBold': require('../../assets/fonts/Outfit-SemiBold.ttf'),
        'Outfit-Bold': require('../../assets/fonts/Outfit-Bold.ttf'),
        'Outfit-ExtraBold': require('../../assets/fonts/Outfit-ExtraBold.ttf'),
        'Outfit-Black': require('../../assets/fonts/Outfit-Black.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return children;
};

export default FontLoader;
