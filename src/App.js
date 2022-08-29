import './App.css';
import {BrowserRouter as Router,Redirect,Route,Switch, useNavigate }from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Items from './pages/Items';

function App() {
  const history=0
  
  return (
    <div className="app-main">
      <div className="app-content">
        <div className="snackbar"></div>
        <div className="error-box"></div>
        <Router history={history}>
          <Switch>
            <Route exact path='/'>
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/product" component={Products}/>
            <Route path="/item" component={Items}/>
          </Switch>
          
        </Router>

      </div>
      
    </div>
  );
}

export default App;
