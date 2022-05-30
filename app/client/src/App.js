import React, {useContext, useState, useEffect} from 'react';
import {Context} from './index'
import {Spinner} from 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
<<<<<<< HEAD
import {check} from './api/borrowersApi'
=======
import NavBar from '../src/components/NavBar'
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67

const App = () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then((data) => {
      user.setUser(data)
      user.setAuth(true, data.role)
      user.setId(localStorage.getItem('id'))
    }).finally(() => {setLoading(false)})
  }, [])

  if(loading) {
    return <Spinner className="d-flex justify-content-center align-items-center" animation="border"></Spinner>
  }

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <NavBar/>
=======
      <NavBar />
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
