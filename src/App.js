import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config';
import WeatherList from './components/WeatherList';
// import WeatherCard from './components/WeatherCard';


const App = () => {

  const { data, error, isLoading, setUrl } = UseFetch();
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error} </h2>
    if(!data && isLoading) return <h2>Loading...</h2>
    if(!data) return null;
    return < WeatherList weathers={data.list} />
  }
  return (
    <Container className='App'>
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)}/>
      {getContent()}
    </Container>
  );
};
export default App;
