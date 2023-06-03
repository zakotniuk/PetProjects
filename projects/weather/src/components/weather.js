import React from "react";

//упрощенный компонент
const Weather = props => (
    <div className="infoWeath">
        {
        props.city && 
        <div>
            <p><span className="bold">Местоположение:</span> {props.country}, {props.city}</p>
            <p><span className="bold">Температура:</span> {props.temp}, {props.weather}</p>
            <p><span className="bold">Атмосферное давление:</span> {props.pressure} мм.рт.ст</p>
            <p><span className="bold">Заход солнца:</span> {props.sunset}</p>
        </div>
        }
        <p className="error">{props.error}</p>   
    </div>
);

export default Weather;