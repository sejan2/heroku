
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddVolunteer from './Components/AddVolunteer/AddVolunteer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import TopNav from './Components/TopNav/TopNav';
import Volunteer from './Components/Volunteer/Volunteer';
import VolunteersTotal from './Components/VolunteersTotal/VolunteersTotal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TopNav></TopNav>
            <Services></Services>
          </Route>
          <Route path="/home">
            <TopNav></TopNav>
            <Services></Services>
          </Route>
          <Route path="/volunteer">
            <Volunteer></Volunteer>
          </Route>
          <Route path="/volume">
            <VolunteersTotal></VolunteersTotal>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addEvent">
            <AddVolunteer></AddVolunteer>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
