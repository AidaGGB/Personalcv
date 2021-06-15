
import './App.css';
import Header from './components/header/Header';
import Bodycv from './components/bodycv/Bodycv';
import Contenido from './components/contenido/Contenido';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/contenido"> 
            <Contenido/>
          </Route>
          <Route exact path="/home">
            <Bodycv/>
          </Route>
          <Route exact path="/" render={()=> <Redirect to="/home"/>}>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
