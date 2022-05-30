import React, {useContext} from 'react';
import {Context} from '../index'
import {Navbar, Nav, Button, Container, Image} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import logo from '../assets/logo.png'
import {useHistory} from 'react-router-dom'
import {USER_ROUTE, TYPES_ROUTE, PERSON_ROUTE, COMPANY_ROUTE, CONSULTANT_ROUTE, 
    INSPECTOR_ROUTE, ACCOUNTANT_ROUTE} from '../utils/consts'

    //-------------
const NavBar = observer(() => {
    const {user} = useContext(Context)
    let history = useHistory()

    const logout = () => {
        user.setUser({})
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        history.push('/types')
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Image height={30} src={logo} />
            {user.isAuth.isCompany 
            ?
                <Nav className="me-auto">
                    <Nav.Link href={COMPANY_ROUTE+TYPES_ROUTE}>Credits</Nav.Link>
                    <Nav.Link href={COMPANY_ROUTE+'/info/financies'}>Info</Nav.Link>
                    <Nav.Link href={COMPANY_ROUTE+'/mail'}>Mail</Nav.Link>
                    <Button variant={"outline-dark"} style={{paddingTop: 0, paddingBottom: 0}}
                    onClick={logout}>Exit</Button>
                </Nav>
            :
            (user.isAuth.isPerson )
            ?
                <Nav className="me-auto">
                    <Nav.Link href={PERSON_ROUTE+TYPES_ROUTE}>Credits</Nav.Link>
                    <Nav.Link href={PERSON_ROUTE+'/info/income'}>Info</Nav.Link>
                    <Nav.Link href={PERSON_ROUTE+'/mail'}>Mail</Nav.Link>
                    <Button variant={"outline-dark"} style={{paddingTop: 0, paddingBottom: 0}}
                    onClick={logout}>Exit</Button>
                </Nav>
            :
            user.isAuth.isConsultant 
            ?
                <Nav className="me-auto">
                    <Nav.Link href={CONSULTANT_ROUTE+'/mail'}>Notics</Nav.Link>
                    <Nav.Link href={CONSULTANT_ROUTE+'/creq'}>Credits</Nav.Link>
                    <Nav.Link href={CONSULTANT_ROUTE+'/vipreq'}>Vips</Nav.Link>
                    <Nav.Link href={CONSULTANT_ROUTE+'/comreq'}>Companies</Nav.Link>
                    <Button variant={"outline-dark"} style={{paddingTop: 0, paddingBottom: 0}}
                    onClick={logout}>Exit</Button>
                </Nav>
            :
            user.isAuth.isInspector 
            ?
                <Nav className="me-auto">
                    <Nav.Link href={INSPECTOR_ROUTE}>Potential</Nav.Link>
                    <Button variant={"outline-dark"} style={{paddingTop: 0, paddingBottom: 0}}
                    onClick={logout}>Exit</Button>
                </Nav>
            :
            user.isAuth.isAccountant 
            ?
                <Nav className="me-auto">
                <Nav.Link href={ACCOUNTANT_ROUTE+'/areq'}>Active</Nav.Link>
                <Nav.Link href={ACCOUNTANT_ROUTE+'/report'}>Report</Nav.Link>
                <Nav.Link href={ACCOUNTANT_ROUTE+'/overdue'}>Overdue</Nav.Link>
                <Button variant={"outline-dark"} style={{paddingTop: 0, paddingBottom: 0}}
                    onClick={logout}>Exit</Button>
                </Nav>
            :
                <Nav className="ml-auto">
                    <Nav.Link href={TYPES_ROUTE}>Credits</Nav.Link>
                    <Nav.Link href={USER_ROUTE+'/login'}>Authorization</Nav.Link>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;