import React from "react";
import Info from "./components/info" 
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "fc367a23d09c9262015720f975f31e73";

class App extends React.Component{//создаем компонент унаследованный от реактюкомпонент
  
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    
    //если город введён
    if(CITY){
      //формируем url адрес
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`);
      //получаем url адрес
      const data = await api_url.json(); console.log(data);
      
      //если город найден
      if(!data.message){
        //получаем время заката из миллисекунд
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset*1000);
        let time_sunset = date.toLocaleTimeString();


        let temp = data.main.temp - 273.15; //температура в Кельвинах в темп в Цельсия
        temp = Math.round(temp);

        //заполняем структуру данных
        this.setState({
          temp: temp,
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          pressure: data.main.pressure,
          sunset: time_sunset,
          error: undefined
        }); 
      }
    }else{//если форма пустая
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        weather: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города!"
      }); 
    }
  }
  
  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="info">
            <Info />
          </div>
          <div className="form">
            <Form weatherMethod={this.gettingWeather}/>
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              weather={this.state.weather}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;//прописали экспорт данного файла(компонента)