import React from "react";
import {Col, Row} from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard
                    temp_max = {main.temp_max}
                    temp_min = {main.temp_min}
                    feels_like = {main.feels_like}
                    humidity = {main.humidity}
                    dt = {dt * 1000}
                    description={weather[0].description}
                    main = {weather[0].main}
                    icon = {weather[0].icon}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;