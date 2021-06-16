import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Components/Header';
import LoginScreen from './Screens/LoginScreen';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import YourSurveysScreen from './Screens/YourSurveysScreen'
import AddNewSurveyScreen from './Screens/AddNewSurveyScreen';
import DummyData from './Data.json'
import EditScreen from './Screens/EditScreen';
import ViewScreen from './Screens/ViewScreen';
import { DATABASE_KEY } from './ConstatantStrings'

function App() {
  
  var isDataLoaded = localStorage.getItem(DATABASE_KEY);
  if(!isDataLoaded) {
    localStorage.setItem(DATABASE_KEY, JSON.stringify(DummyData))
  }
  
  return (
    <Router>
        <div className="App">
          <div className="container">
            <header className="header">
              <Header />
              <Switch className="content">
                  <Route path="/" exact={true} component={LoginScreen} />
                  <Route path="/login" component={LoginScreen} />
                  <Route path="/update" component={UpdateProfileScreen} />
                  <Route path="/yoursurveys" component={YourSurveysScreen} />
                  <Route path="/addsurvey/"> <AddNewSurveyScreen /> </Route> 
                  <Route path="/editsurvey/:index"> <EditScreen /> </Route>
                  <Route path="/viewsurvey/:index"> <ViewScreen /> </Route> 
              </Switch>
            </header>
          </div>
        </div>
    </Router>
  );
}

export default App;
