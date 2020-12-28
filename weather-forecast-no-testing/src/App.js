import "./App.css";
// import 'materialize-css';
// import { Navbar, Icon } from 'react-materialize';
import Header from "./Header/Header";

function App() {
  
  const cityHandler= () => {
    console.log("city chosen")
  }

  const coordsHandler = (position) => {
    console.log(position);
  }

  return (
    <div className="App">
    <Header city={cityHandler} coords={coordsHandler}/>
    </div>
  );
}

export default App;
