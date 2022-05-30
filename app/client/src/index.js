import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss'
import App from './App';
import RequestState from './service/RequestState';
import UserState from './service/UserState'
import TypesState from './service/TypesState'
import InfoState from './service/InfoState';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserState(),
    request: new RequestState(),
    types: new TypesState(),
    info: new InfoState(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);