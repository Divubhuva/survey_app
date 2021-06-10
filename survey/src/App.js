import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import YourSurveysScreen from './Screens/YourSurveysScreen'
import AddNewSurveyScreen from './Screens/AddNewSurveyScreen';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div className="container">
            <header className="header">
              <Header />
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/update" component={UpdateProfileScreen} />
              <Route path="/yoursurveys" component={YourSurveysScreen} />
              <Route path="/addsurvey" component={AddNewSurveyScreen} />
              
            </header>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
