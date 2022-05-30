import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss'
import App from './App';
import RequestState from './service/RequestState';
import UserState from './service/UserState'
import TypesState from './service/TypesState'
<<<<<<< HEAD
import InfoState from './service/InfoState';
=======
import 'materialize-css'
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserState(),
    request: new RequestState(),
<<<<<<< HEAD
    types: new TypesState(),
    info: new InfoState(),
=======
    types: new TypesState()
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);