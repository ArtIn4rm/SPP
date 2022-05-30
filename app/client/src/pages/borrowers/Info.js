import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../../index'
import {Row, Form, Button, Container, Card, Table, ListGroup, FormText} from 'react-bootstrap'
import {setPerson, setCompany, addPledge, addGuarantor, 
    setFinancies, addIncome, fetchPerson} from '../../api/borrowersApi'
import {observer} from 'mobx-react-lite'

const Info = observer(() => {
    let {user} = useContext(Context)
    let {info} = useContext(Context)

    let [feedback, setFeedback] = useState('')
    let [work, setWork] = useState('')
    let [position, setPosition] = useState('')
    let [income, setIncome] = useState('')

    let [name, setName] = useState('')
    let [price, setPrice] = useState('')
    let [estate, setEstate] = useState('')

    let [guarantorWork, setGuarantorWork] = useState('')
    let [guarantorPosition, setGuarantorPosition] = useState('')
    let [guarantorIncome, setGuarantorIncome] = useState('') 

    useEffect(() => {
        fetchPerson().then((data) => {
            info.setPerson(data.income)
            info.setPledge(data.pledge)
            info.setGuarantors(data.guarantors)
        })
    }, [])

    const setInfo = () => {
        try{
            if(user.isAuth.isPerson){
                setPerson({feedback, work, position, income}).then((data) => {
                    setFeedback('')
                    setWork('')
                    setPosition('')
                    setIncome('')
                })
            } else {
            }
        } catch(e){
            alert(e.message)
        }
    }

    const addingPledge = () => {
        try{
            if(user.isAuth.isPerson){
                addPledge({name, price, isEstate: estate}).then((data) => {
                    setName('')
                    setPrice('')
                    setEstate('')
                })
            } else {
            }
        } catch(e){
            alert(e.message)
        }
    }

    const addingGuarantor = () => {
        try{
            if(user.isAuth.isPerson){
                addGuarantor({guarantorWork, guarantorPosition, guarantorIncome}).then((data) => {

                })
            } else {
            }
        } catch(e){
            alert(e.message)
        }
    }

    const setFinancies = () => {

    }

    const addIncome = () => {

    }

    return (
<<<<<<< HEAD
        <>
            <Container className='d-flex justify-content-center align-items-center'
                style={{paddingLeft: 0}}>
            <Card style={{width: 800, backgroundColor: "#f8f9fb", borderColor: "white", marginTop: 60}}>
                <h1 style={{color: "#505050"}} className="ml-auto mr-auto mt-4">
                    {'Info'}
                </h1>
                <div className="types_block">
                {user.isAuth.isPerson 
                ?
                <>
                    <ListGroup className="mr-auto ml-auto mt-4" style={{backgroundColor: "#f8f9fb", width: 400, boxShadow: [5, 5, 5, 5, "#000000"]}}>
                    <ListGroup.Item style={{fontWeight: "bold"}}>accounting feedback - <span style={{color: "#ff834d"}}>
                        {`${info.person.feedback}`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>working place - <span style={{color: "#ff834d"}}>
                        {`${info.person.work}`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>occupied position - <span style={{color: "#ff834d"}}>
                        {`${info.person.position}`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>income per month - <span style={{color: "#ff834d"}}>
                        {`${info.person.income}$`}</span></ListGroup.Item>
                    </ListGroup>
                    <Form className="d-flex flex-column mt-3">
                        <Form.Control
                        className="mt-2 ml-auto mr-auto"
                        style={{width: 400}}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter feedback"/>

                        <Form.Control
                        className="mt-2 ml-auto mr-auto"
                        style={{width: 400}}
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                        placeholder="Enter working place"/>

                        <Form.Control
                        className="mt-2 ml-auto mr-auto"
                        style={{width: 400}}
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Enter occupied position"/>

                        <Form.Control
                        className="mt-2 ml-auto mr-auto"
                        style={{width: 400}}
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="Enter income"/>

                        <Button 
                        variant="outline-dark"
                        className="mt-4 ml-auto mr-auto"
                        style={{width: 400}}
                        onClick={setInfo}
                        >
                            Submit
                        </Button>

                        <h2 style={{color: "#505050"}} className="ml-auto mr-auto mt-4">
                            {'Pledge'}
                        </h2>
                    </Form>

                    <Table striped bordered hover
                    className="ml-auto mr-auto"
                    style={{width: 600}}
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pledge name</th>
                                <th>{"Total price ($)"}</th>
                                <th>Is estate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.pledge.map((value, index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{(value.estate) ? "yes" : "no" }</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                    <Form className="d-flex flex-column mt-3">
                    <Row className="mt-3 ml-auto mr-auto">
                        <Form className="d-flex mr-2">
                            <Form.Control
                            style={{width: 200}}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"/>
                        </Form>
                        <Form className="d-flex mr-2">
                            <Form.Control
                            style={{width: 200}}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"/>
                        </Form>
                        <Form className="d-flex">
                            <Form.Control
                            style={{width: 100}}
                            value={estate}
                            onChange={(e) => setEstate(e.target.value)}
                            placeholder="Estate"/>
                        </Form>
                    </Row>
                    <Button 
                        variant="outline-dark"
                        className="mt-4 ml-auto mr-auto"
                        style={{width: 517}}
                        onClick={addingPledge}
                        >
                            Add Pledge
                        </Button>
                        <h2 style={{color: "#505050"}} className="ml-auto mr-auto mt-4">
                            {'Guarantors'}
                        </h2>
                    </Form>

                    <Table striped bordered hover
                    className="ml-auto mr-auto"
                    style={{width: 600}}
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Working place</th>
                                <th>{"Income ($)"}</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.guarantors.map((value, index) =>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{value.work}</td>
                                    <td>{value.income}</td>
                                    <td>{value.position}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                    <Form className="d-flex flex-column mt-3">
                    <Row className="mt-3 ml-auto mr-auto">
                        <Form className="d-flex mr-2">
                            <Form.Control
                            style={{width: 200}}
                            value={guarantorWork}
                            onChange={(e) => setGuarantorWork(e.target.value)}
                            placeholder="Work"/>
                        </Form>
                        <Form className="d-flex mr-2">
                            <Form.Control
                            style={{width: 150}}
                            value={guarantorIncome}
                            onChange={(e) => setGuarantorIncome(e.target.value)}
                            placeholder="Income"/>
                        </Form>
                        <Form className="d-flex">
                            <Form.Control
                            style={{width: 150}}
                            value={guarantorPosition}
                            onChange={(e) => setGuarantorPosition(e.target.value)}
                            placeholder="Position"/>
                        </Form>
                    </Row>
                    <Button 
                        variant="outline-dark"
                        className="mt-4 ml-auto mr-auto mb-4"
                        style={{width: 517}}
                        onClick={addingGuarantor}
                        >
                            Add Guarantor
                    </Button>
                    </Form>
                </>
                :
                    <>
                    </>
                }
                </div>
            </Card>
            </Container>
        </>
=======
        <div>
            Info
        </div>
>>>>>>> cfca8736f6fd785e125e417d658adaf4616a2a67
    );
})

export default Info;