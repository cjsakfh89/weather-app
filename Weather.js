import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const CONDITION_IMAGES = {
    condition: [
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Dust',
        'Ash',
        'Squall',
        'Tornado',
        'Clear',
        'Clouds'
    ],
    uri: [
        'http://openweathermap.org/img/wn/11d@4x.png',
        'http://openweathermap.org/img/wn/09d@4x.png',
        'http://openweathermap.org/img/wn/10d@4x.png',
        'http://openweathermap.org/img/wn/13d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/50d@4x.png',
        'http://openweathermap.org/img/wn/01d@4x.png',
        'http://openweathermap.org/img/wn/03d@4x.png'
    ],
    gradient: [
        [
            '#373B44', '#4286f4'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#00C6FB', '#005BEA'
        ],
        [
            '#7DE2FC', '#B9B6E5'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#89F7FE', '#66A6FF'
        ],
        [
            '#FF7300', '#FEF253'
        ],
        [
            '#D7D2CC', '#304352'
        ]
    ]
};

export default function Weather({condition, temp}) {
    return (
        <LinearGradient // Background Linear Gradient
            colors={
                CONDITION_IMAGES.gradient[CONDITION_IMAGES.condition.indexOf(condition)]
            }
            style={
                styles.container
        }>
            <StatusBar barStyle='light-content'/>
            <View style={
                styles.halfContainer
            }>
                <Image source={
                        {
                            uri: CONDITION_IMAGES.uri[CONDITION_IMAGES.condition.indexOf(condition)],
                            cache: 'only-if-cached'
                        }
                    }
                    style={
                        styles.image
                    }/>
                <Text style={
                    styles.text
                }>
                    {temp}℃
                </Text>
            </View>
            <View style={
                {
                    ...styles.halfContainer,
                    ...styles.textContainer
                }
            }>
                <Text style={
                    styles.title
                }>Title</Text>
                <Text style={
                    styles.subtitle
                }>Subtitle</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(
        [CONDITION_IMAGES.condition]
    ).isRequired
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    image: {
        width: 192,
        height: 192
    },
    text: {
        color: 'white',
        fontSize: 42
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: "600"
    }
});
