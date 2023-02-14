import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchCountry from './components/SearchCountry';
import CountryDetail from './components/CountryDetail';
import Countries from './components/Countries';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<><SearchCountry/><Countries/></>}/>
            <Route path="/country-detail/:id" element={<CountryDetail/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
