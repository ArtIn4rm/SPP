import React from 'react';
import {Form, Row, NavLink, Button, Container, Card} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'
import {USER_ROUTE} from '../utils/consts';

const isCompany = window.localStorage.getItem('isCompany') !== null

const Auth = () => {
    const isLogin = useLocation().pathname === USER_ROUTE + '/login'
    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight-54}}>
            <Card style={{width: 600, backgroundColor: "#f8f9fb"}} className='p-5'>
                <h2 style={{color: "#505050"}} className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Enter email"/>
                </Form>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Enter password"/>
                </Form>
                {!isLogin &&
                    <Container>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
                            placeholder="Name"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
                            placeholder="Surname"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 100}}
                            placeholder="Seria"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 390}}
                            placeholder="Number"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 502}}
                            placeholder="Payment account"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 138}}
                            placeholder="City"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 240}}
                            placeholder="Street"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 100}}
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
                            placeholder="Company name"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{width: 245}}
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
                    <Button className="mt-3 ml-auto mr-auto pr-4 pl-4" variant={"outline-dark"}>
                        {isLogin ? 'Enter' : 'Register'}</Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;