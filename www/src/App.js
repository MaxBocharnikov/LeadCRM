import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Provider from "react-redux/es/components/Provider";
import {configureStore} from "./store/configureStore";
import AuthContainer from './containers/Auth/Auth';
import HomeContainer from './containers/Home/Home';

import './App.scss'


export const store = configureStore();

function App() {

  return (
     <main className="container">
         <Provider store={store}>
             <Router>
                 <Switch>
                     <Route path="/" exact component={AuthContainer}/>
                     <Route path="/home" component={HomeContainer}/>
                 </Switch>
             </Router>
         </Provider>
     </main>
  );
}

export default App;
