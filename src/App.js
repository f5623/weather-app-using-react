//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
function App() {
  
  return (
    <div className="App container">
      <header className=" App-wrapper mx-auto ">
      
      <Weather/>
      </header>
      <small className="footnote">
      <a href="https://github.com/f5623/react-weather-app">This project </a>
      is coded by <a href="https://github.com/f5623">Fafa</a> as
      <a href="https://www.shecodes.io/">SheCodes React </a>  project.
     </small>
    </div>
  );
}

export default App;
