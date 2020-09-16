import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import localVariables from "../config/localVariables";
import Home from './pages/home';
import LayoutView from './Layout/LayoutView';
import About from './pages/About';
import Joining from './pages/Joining';



const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest} render={props => (
        localStorage.getItem(localVariables.ACCESS_TOKEN) ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      )}
      />
    );
  };
  
  const PublicRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest} render={props => (
        localStorage.getItem(localVariables.ACCESS_TOKEN) ? (
          <Redirect
            to={{
              pathname: '/app',
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      )}
      />
    );
  };

  const App=()=>{ 
    return( 
             <Router >
                 <Switch>
                     <Route exact path="/" render={() => <Redirect to="/home" />} />
                     <Route exact path="/app" render={() => <Redirect to="/dashboard" />} />
                     <PrivateRoute path="/app" component={LayoutView} />
                     <PublicRoute exact path="/home" component={Home}/>
                     <PublicRoute exact path="/about" component={About}/>
                     <PublicRoute exact path="/joining" component={Joining}/>
                 </Switch>
             </Router>
          )};
  
 export default App;
