import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const[city, setCity] = useState('');

    return (
        <div className="bgimg" style={{backgroundImage : `url("https://source.unsplash.com/1600x900/?$landscape")`}}>
        <div className="body">
        <Row>
            <Col>
            <h2>Search City</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <FormControl className="searchcity" placeholder='Enter City...'
                onChange={(event)=>setCity(event.target.value)}
                value = {city}/>
                <Button className='searchbutton' onClick={() => onSearch(city)}>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/1A1A1A/search.png" alt="search"/>
                </Button>
            </Col>
        </Row>
        
        </div>
        </div>
    );
};



export default CitySelector;