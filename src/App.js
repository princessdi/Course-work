import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AlertBox from './AlertBox/AlertBox';
import Card from './Card/Card';
import Header from './Header/Header';

function App() {
  const [apiKey, setApiKey] = useState("9bbf689b50a94c7c8bc195210230312");
  const [city, setCity] = useState("");
  const [isReady, setReady] = useState(false);
  const [cityInfo, setCityInfo] = useState(
    {
      alerts: { alert: {} },
      current: {},
      forecast:{forecastday:{}}
    });

  const [inputError, setInputError] = useState("");
  const sendRequest = () => {
   
    if (city.trim() === "") { 
      setInputError("enter name of the city");
      return;
    }

    if (/[^a-zA-Z]/.test(city)) {
      setInputError("use only letters");
      return; 
    } 

    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=yes`)
      .then(function (response) {
        
          setCityInfo(response.data);
          setReady(true);
          setInputError(""); 
        
      })
      .catch(function (error) {
        console.log(error);
      })

  };

  return (
    <div className="App">

      {/*Заголовок в компоненте */}
      <Header />
      <h1>Discover the weather of the whole world <br/> with the Weather App!</h1>
      
      <input className='input' placeholder='Input city' onChange={(e) => { setCity(e.target.value) }} type='text' />
      <button  className='find-button' onClick={() => {
        sendRequest();
      }}>Find</button>
      <div className="error-message" style={{ color: 'red', marginRight: '150px' }}>{inputError}</div>

      {/* Вывод температуры за сегодня/завтра  */}
      <Card isReady={isReady} forecast={cityInfo.forecast.forecastday[0]} cardInfo={cityInfo.current} />
      {/* Вывод стихийных бедствий  */}
      <AlertBox isReady={isReady} alerts={cityInfo.alerts.alert} />


    </div>
  );
}

export default App;
