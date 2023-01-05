import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { MagnifyingGlass } from "react-loader-spinner";

export default function Current(props) {
    if (props.input === null) {
      return (
        <div>
          <p className='mt-4'> Waiting for your city </p>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      );
    } else {
      return (
        <div className="weather-now mt-1">
                <div className="row">
                    <div className="col-4 pt-3 align-middle">
                        <p className='fs-2 text-capitalize'>{props.input.city}</p>
                        <p className="text-muted">
                        <span className="day">{new Date().toLocaleString('en-GB', {day: 'numeric',
                        month: 'short',}) + ""}</span> ,<span className="time">
                        {new Date().toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true,})}</span>
                        </p>
                    </div>
                    <div className="col-4 align-middle pt-4">
                        <span>Temperature: {props.input.currentTemp}°C</span>
                        <img src={props.input.imgSrc} alt="weather icon"/>
                    </div>
                    <div className="col-4 align-middle pt-3 text-center">                   
                        <p>WindSpeed : {props.input.windSpeed}km/h</p>
                        <p>Humidity : {props.input.humidity}%</p>
                        <p> {props.input.weatherDesc}</p>
                    </div>
                </div>
                
            
        </div>
        
      );
    }
  }