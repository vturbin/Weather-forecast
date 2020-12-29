import "./App.css";
// import 'materialize-css';
// import { Navbar, Icon } from 'react-materialize';
import Header from "./Header/Header";

function App() {

  const showForecastFromCity = (key,cityName,countryName) => {

  }

  const showForecastFromCoordinates = (position) => {

  }
  
  const cityHandler= (key, cityName, countryName) => {
    showForecastFromCity(key,cityName,countryName);
  }

  const coordsHandler = (position) => {
    showForecastFromCoordinates(position);
  }

  return (
    <div className="App">
    <Header city={cityHandler} coords={coordsHandler}/>
    </div>
  );
}

export default App;
