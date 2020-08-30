import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Loader from './Loader';
import * as Location from 'expo-location';
import Axios from 'axios';
import Weather from './Weather';

const OPEN_WEATHER_MAP_API_KEY = '8ba87b397096849198ca74663dde6565';

export default class App extends React.Component {
    state = {
        isLoading: true
    }
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                weather: [
                    {
                        main
                    }
                ],
                main: {
                    temp
                }
            }
        } = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`);
        this.setState({temp});
        this.setState({condition: main});
        console.log(temp);
        console.log(main);
    }
    getLocation = async () => {
        try {
            const {status} = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Failed', 'Permission to access location was denied');
            }
            const {
                coords: {
                    latitude,
                    longitude
                }
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            this.setState({isLoading: false});
        } catch (error) {
            Alert.alert('Failed', 'Can not find location.');
        }
    }
    componentDidMount() {
        this.getLocation()
    }
    render() {
        const {isLoading, condition, temp} = this.state;
        return(isLoading ? <Loader></Loader> : <Weather condition={condition} temp={Math.round(temp)}></Weather>);
    }
}
