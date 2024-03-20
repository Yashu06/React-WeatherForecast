import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, feels_like, description, humidity, icon}) => {
    const date = new Date(dt);
    return (
        <CardGroup>
                <Card className='card-grid'>
                <Card.Img variant = "top" className='card-img'
                src = {`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                <Card.Body>
                    <Card.Title>{description}</Card.Title>
                        <p>
                            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                        </p>
                        <p>Min : {temp_min} °C</p>
                        <p>Max : {temp_max} °C</p>
                        <p>Feels Like : {feels_like} °C</p>
                        <p>Humidity : {humidity}%</p>
                </Card.Body>
            </Card>        
        </CardGroup>
    );
};

export default WeatherCard;