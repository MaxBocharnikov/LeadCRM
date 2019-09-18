import React from 'react';
import LeadListContainer from "./containers/LeadList/LeadList";
import Provider from "react-redux/es/components/Provider";
import {configureStore} from "./store/configureStore";
import LeadDetailContainer from "./containers/LeadDetail/LeadDetail";
import FilterContainer from "./containers/Filter/Filter";
import Header from "./components/Header/Header";
import './App.scss'


export const store = configureStore();

function App() {

  return (
     <main className="container">
         <Provider store={store}>
             <Header/>
             <FilterContainer/>
             <LeadListContainer/>
             <LeadDetailContainer/>
         </Provider>
     </main>
  );
}

export default App;
