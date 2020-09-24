import React from 'react';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import localVariables from "../config/localVariables";
import Home from './pages/Home';
import LayoutView from './Layout/LayoutView';
import About from './pages/About';
import Joining from './pages/Joining';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Aayogya from './pages/Aayogya';
import NandiSamaarth from './pages/NandiSamarth';
import Protsahan from './pages/Protsahan';
import Shagun from './pages/Shagun';
import Samarpan from './pages/Samarpan';
import SanaskritiSahayog from './pages/SanaskritiSahayog';
import Annakshetra from './pages/Annakshetra';



const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest} render={props => (
        localStorage.getItem(localVariables.ACCESS_TOKEN) ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/home',
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
              pathname: '/',
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
             <HashRouter >
                 <Switch>
                     <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
                     <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
                     <PrivateRoute path="/app" component={LayoutView} />
                     <PublicRoute exact path="/home" component={Home}/>
                     <PublicRoute exact path="/about" component={About}/>
                     <PublicRoute exact path="/joining" component={Joining}/>
                     <PublicRoute exact path="/donate" component={Donate}/>
                     <PublicRoute exact path="/volunteers" component={Volunteer}/>
                     <PublicRoute exact path="/aayogya" component={Aayogya}/>
                     <PublicRoute exact path="/nandisamarth" component={NandiSamaarth}/>
                     <PublicRoute exact path="/protsahan" component={Protsahan}/>
                     <PublicRoute exact path="/shagun" component={Shagun}/>
                     <PublicRoute exact path="/samarpan" component={Samarpan}/>
                     <PublicRoute exact path="/sanskritisahyog" component={SanaskritiSahayog}/>
                     <PublicRoute exact path="/annakshetra" component={Annakshetra}/>

                 </Switch>
             </HashRouter>
          )};
  
 export default App;
