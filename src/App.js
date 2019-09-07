import React from 'react';
import LeadListContainer from "./containers/LeadList/LeadList";
import Provider from "react-redux/es/components/Provider";
import {configureStore} from "./store/configureStore";

export const store = configureStore();

function App() {

  return (
     <main className="container">
         <Provider store={store}>
             <LeadListContainer/>
         </Provider>
     </main>
  );
}

export default App;
