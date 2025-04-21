import React from "react";


const WeatherDisplay = (props) =>{

const tempStyle = {

    color : props.temperature>20 ? 'red' : 'blue'
}
    return(

        <div>
            <p>
                Temperature: <span style={tempStyle}>{props.temperature}</span>
            </p>
            <p>Condition: {props.conditions}</p>
        </div>
    )


}

export default WeatherDisplay;