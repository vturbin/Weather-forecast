import "./App.css";
// import 'materialize-css';
// import { Navbar, Icon } from 'react-materialize';
import Header from "./Header/Header";

function App() {
  
  const cityHandler= () => {
    console.log("city chosen")
  }

  return (
    <div className="App">
    <Header city={cityHandler} />
    </div>
  );
}

export default App;
