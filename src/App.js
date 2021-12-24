
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import BecomHost from './pages/BecomHost';
import NotFound from './pages/NotFound';



function App() {
  



  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/admin'>
          <BecomHost />
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>

      </Switch>

    </Router>
    
  );
}

export default App;
