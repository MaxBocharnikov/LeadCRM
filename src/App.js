import React from 'react';
import LeadListContainer from "./containers/LeadList/LeadList";
import Provider from "react-redux/es/components/Provider";
import {configureStore} from "./store/configureStore";
import LeadDetailContainer from "./containers/LeadDetail/LeadDetail";

import './App.css'

export const store = configureStore();

function App() {

  return (
     <main className="container">
         <Provider store={store}>
             <LeadListContainer/>
             <LeadDetailContainer/>
         </Provider>
     </main>
  );
}

export default App;
