import React from 'react'

const Weather = props => (
    <div className="weather__info">
        {props.city && props.country && <p>{props.city} - {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>Error: {props.error}</p>}
    </div>
)

export default Weather