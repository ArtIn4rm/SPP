import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RequestState from './service/RequestState';
import UserState from './service/UserState'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserState(),
    request: new RequestState()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);