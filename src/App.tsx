// import React from 'react';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
import React, { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import createStore from "./store";
import Routes from "./routes";
import "./App.css";
const { store, persistor } = createStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                    <Routes />
            </PersistGate>
        </Provider>
    );
};

export default memo(App);
