import './App.css';
import { persistor, store } from './app/store';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Routing } from './route';
import { Toaster } from 'react-hot-toast';
import StateChange from './components/StateChange';
const App = () => {
  return (
    <>
      <div>
        <Toaster position='bottom-left' reverseOrder={false} />
      </div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StateChange />
          <Routing />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
