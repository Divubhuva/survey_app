import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import YourSurveysScreen from './Screens/YourSurveysScreen'
import AddNewSurveyScreen from './Screens/AddNewSurveyScreen';



function App() {
  return (
    <Router>
        <div className="App">
          <div className="container">
            <header className="header">
              <Header />
              <Switch>
                  <Route path="/" exact={true} component={HomeScreen} />
                  <Route path="/login" component={HomeScreen} />
                  <Route path="/update" component={UpdateProfileScreen} />
                  <Route path="/yoursurveys" component={YourSurveysScreen} />
                  <Route path="/addsurvey/:id"> <AddNewSurveyScreen /> </Route> 
                  
              </Switch>
            </header>
          </div>
        </div>
    </Router>
  );
}

export default App;
