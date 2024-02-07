import React from "react";
import { api_key, base_url } from "../utils/constants/constants";
import Form from "./Form";
import Weather from "./Weather";
// Stateless
class Data extends React.Component {
    // constructor, state
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {
                city: null,
                country: null,
                temp: null,
                pressure: null,
                icon: null,
                sky: null
            },
            message: "Choose the city"
        }
    }

    getWeather = (city) => {
        fetch(`${base_url}?appid=${api_key}&q=${city}&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        city: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        icon: data.weather[0].icon,
                        sky: data.weather[0].description
                    },
                    message: ""
                })
            })
            .catch(e => { // обработчик случая ошибок
                this.setState({
                    weatherInfo: {
                        city: null,
                        country: null,
                        temp: null,
                        pressure: null,
                        icon: null,
                        sky: null
                    },
                    message: "Invalid city name"
                })
            })
    }

    render() {
        return (
            <div>
                {/* Передаем через пропс функцию фетч-запроса getweather в компонент Form*/}
                <Form getWeather={this.getWeather} />
                <Weather weather={this.state.weatherInfo} message={this.state.message} />
            </div>
        )
    }
}
export default Data;