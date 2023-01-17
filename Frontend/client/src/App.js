import './App.css';
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from './components/landindPage/LandingPage';
import  Home  from "./components/home/Home"
import DetailCountry from './components/detailCountry/DetailCountry';
import FormActivity from './components/formActivity/FormActivity';
import Error404 from './components/error/Error404';
// import { FormCountry }   from './components/formCountry/FormCountry';


function App() {

  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/countries/:id" component={DetailCountry} />
          <Route exact path="/countries" component={""} />
          <Route exact path="/countries/edit/:id" component={""} />
          <Route exact path="/formulario" component={FormActivity} />
          <Route exact path="*" component={Error404} />
  
          {/* <Route exact path="/formulario2" component={FormCountry} /> */}
        
      </Switch>
    </div>
  );
}

export default App;
