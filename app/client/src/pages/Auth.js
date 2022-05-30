<<<<<<< HEAD
import React, {useState, useContext} from 'react';
import { Context } from '../index';
import {Form, Row, NavLink, Button, Container, Card} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'
import {USER_ROUTE} from '../utils/consts';
import {login, register} from '../api/borrowersApi'
import {useHistory} from 'react-router-dom'
=======
import React from 'react';
import {Form, Row, NavLink, Button, Container, Card} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'
import {USER_ROUTE} from '../utils/consts';
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67

const isCompany = window.localStorage.getItem('isCompany') !== null

const Auth = () => {
    const isLogin = useLocation().pathname === USER_ROUTE + '/login'
<<<<<<< HEAD
    let history = useHistory()
    let {user} = useContext(Context)

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [seria, setSeria] = useState('')
    let [num, setNum] = useState('')
    let [account, setAccount] = useState('')
    let [city, setCity] = useState('')
    let [street, setStreet] = useState('')
    let [building, setBuilding] = useState('')
    let [company, setCompany] = useState('')
    let [id, setId] = useState('')

    const reg = async () => {
        try {
            if(email == '' || password == '' || name == '' || city == '' || street == '' || surname == '' ||
            seria == '' || num == '' || account == '' || building == '') {
                alert("write down all fields")
            } else {
                let type = (company != '' || id != '') ? {company, id} : null
                let data = await register({email, password, name, city, street, surname, account, building, seria, 
                    num, type
                })
                user.setUser(data.user)
                user.setAuth(true, data.user.role)
                user.setId(data.id)
                history.push(user.path + 'types')
            }
        } catch (e) {
            alert(e)
        }
    }

    const log = async () => {
        try {
            if(email == '' || password == ''){
                alert("write down all fields")
            } else {
                let data = await login(email, password)
                user.setUser(data)
                user.setAuth(true, data.user.role, data.id)
                user.setId(data.id)
                console.log("aaaaaaaaaaaaaaaaaa")
                history.push(user.path + 'types')
            }
        } catch (e) {
            alert(e)
        }
    }


=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight-54}}>
            <Card style={{width: 600, backgroundColor: "#f8f9fb"}} className='p-5'>
                <h2 style={{color: "#505050"}} className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
<<<<<<< HEAD
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                    placeholder="Enter email"/>
                </Form>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
<<<<<<< HEAD
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                    placeholder="Enter password"/>
                </Form>
                {!isLogin &&
                    <Container>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
<<<<<<< HEAD
                            value={name}
                            onChange={(e) => setName(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Name"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
<<<<<<< HEAD
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Surname"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 100}}
<<<<<<< HEAD
                            value={seria}
                            onChange={(e) => setSeria(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Seria"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 390}}
<<<<<<< HEAD
                            value={num}
                            onChange={(e) => setNum(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Number"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 502}}
<<<<<<< HEAD
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Payment account"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 138}}
<<<<<<< HEAD
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="City"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 240}}
<<<<<<< HEAD
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Street"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 100}}
<<<<<<< HEAD
                            value={building}
                            onChange={(e) => setBuilding(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Building"/>
                        </Form>
                    </Row>
                    {!isCompany ?
                    <Row className="d-flex justify-content-between mt-3">
                        <label className="ml-auto mr-auto">
                            <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={() => {
                                window.localStorage.setItem('isCompany', true)
                                window.location.reload()
                            }}
                            />
                            <span className="ml-2">Are you a company?</span>
                        </label>
                    </Row>
                    :
                    <Row className="d-flex justify-content-between mt-3">
                        {window.localStorage.removeItem('isCompany')}
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
<<<<<<< HEAD
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Company name"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
<<<<<<< HEAD
                            value={id}
                            onChange={(e) => setId(e.target.value)}
=======
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                            placeholder="Company registration id"/>
                        </Form>
                    </Row>
                    }
                    </Container>
                }
                <Row className="d-flex justify-content-between pr-5 pl-5">
                    {!isLogin ? 
                        <NavLink className="ml-auto pt-4" style={{color: "#ff834d"}} href={USER_ROUTE+'/login'}>
                            Authorize
                        </NavLink>
                        :
                        <NavLink className="ml-auto pt-4" style={{color: "#ff834d"}} href={USER_ROUTE+'/registrate'}>
                            Register
                        </NavLink>
                    }
<<<<<<< HEAD
                    <Button className="mt-3 ml-auto mr-auto pr-4 pl-4" variant={"outline-dark"}
                    onClick={isLogin ? log : reg}
                    >
=======
                    <Button className="mt-3 ml-auto mr-auto pr-4 pl-4" variant={"outline-dark"}>
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
                        {isLogin ? 'Enter' : 'Register'}</Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;