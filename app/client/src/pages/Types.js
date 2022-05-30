import React, {useContext, useState} from 'react'
import {Context} from '../index'
import {Row, Select, Button, Container, Card, Carousel, ListGroup, FormText} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {observer} from 'mobx-react-lite'
import {useLocation} from 'react-router-dom'
import {sendCredit} from '../api/borrowersApi'

const Types = observer(() => {
    const {user} = useContext(Context)
    const {types} = useContext(Context)
    const location = useLocation().pathname
    const isSend = location.indexOf('send') !== -1
    const isId = (location.indexOf('types/') !== -1) && !isSend
    const typeById = types.types.find(item=>item.id == location.substring(location.indexOf(':')+1))
    const procents = []
    if(isId){
        for(let proc = typeById.procentPerYearLower*100; proc <= typeById.procentPerYearUpper*100; proc+=2) {
            procents.push(proc)
        }
    }
    let times = [{key: "Time to pay", value: ''}, {key: "Month", value: 1}, {key: "3 Month", value: 3}, 
        {key: "6 Month", value: 6}, {key: "Year", value: 12}, {key: "2 Years", value: 24}, 
        {key: "5 Years", value: 60}, {key: "10 Years", value: 120}, {key: "20 Years", value: 240}
    ]     

    let [price, setPrice] = useState('')
    let [time, setTime] = useState('')
    let [procent, setProcent] = useState('')
    let [aim, setAim] = useState('')
    let [conditions, setConditions] = useState('')

    const send = () => {
        if(user.isAuth.isPerson){
            if(price == '' || time == '' || procent == '' || aim == '' || conditions == ''){
                alert("enter all inforamtion")
            } else {
                sendCredit({price, time, procent, aim, conditions, typeName: typeById.name}).then((data) => {
                    
                })
            }
        } else {
            alert("you can't send credit request without authorization")
        }
    }
 
    return (
        <Container className='d-flex justify-content-center align-items-center'
        style={{paddingLeft: 0}}>
            <Card style={{width: 800, backgroundColor: !isId ? "white" : "#f8f9fb", borderColor: "white", marginTop: isId ? 60 : 0}}>
            <h1 style={{color: "#505050"}} className="ml-auto mr-auto mt-4">
                {!isId ? 'Credit types' : `Get ${typeById.name.toLowerCase()}`}
            </h1>
            <div className="types_block">
            {isId ? 
            <div style={{color: "#505050"}}>
                <h6 className="mr-auto ml-auto mt-4" style={{fontSize: 16, width: 600}}>{typeById.description}</h6>
                <ListGroup className="mr-auto ml-auto mt-4" style={{backgroundColor: "#f8f9fb", width: 400, boxShadow: [5, 5, 5, 5, "#000000"]}}>
                    <ListGroup.Item style={{fontWeight: "bold"}}>minimum procent per year - <span style={{color: "#ff834d"}}>
                        {`${typeById.procentPerYearLower*100}%`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>maximum procent per year - <span style={{color: "#ff834d"}}>
                        {`${typeById.procentPerYearUpper*100}%`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>maximum price - <span style={{color: "#ff834d"}}>
                        {`${typeById.maxPrice}$`}</span></ListGroup.Item>
                    <ListGroup.Item style={{fontWeight: "bold"}}>down payment procent - <span style={{color: "#ff834d"}}>
                        {`${typeById.downPaymentProc*100}%`}</span></ListGroup.Item>
                </ListGroup>
                <h5 className="ml-auto mr-auto mt-4" style={{width: 230}}>required borrower level:</h5>

                <ListGroup className="mr-auto ml-auto mt-4" style={{width: 115}}>
                    <ListGroup.Item className="pr-auto pl-auto" style={{backgroundColor: "#505050", fontWeight: "bold", color: "#ff834d"}}>
                        {typeById.borrowerLevel}
                    </ListGroup.Item>
                </ListGroup>

                <Form className="d-flex flex-column">
                    <Form.Group className="mb-3">
                        <Row className="d-flex justify-content-between mt-4">
                            <Form.Label className="ml-auto mr-5">Price</Form.Label>
                            <input id="price" className="mr-auto price_range" style={{minWidth: 500}} type="range" min="0" max={typeById.maxPrice}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        </Row>
                        <h4 className="ml-auto mr-auto mt-1" style={{width: 110}}>
                            {price}
                        </h4>

                        <Row className="d-flex justify-content-between mt-5">
                            <Form.Control as="select" className="ml-auto" style={{marginLeft: 90, width: 200}}>
                                {
                                    times.map((value) => 
                                     <option value={time} onClick={() => setTime(value.value)}>{value.key}</option>
                                    )
                                }
                            </Form.Control>
                            <Form.Control as="select" className="ml-auto mr-auto" style={{width: 200}}>
                                <option onClick={() => setProcent("")}>Agreed procent</option>
                                {
                                    procents.map((value) => 
                                        <option value={procent} onClick={() => setProcent(value)}>{`${value}%`}</option>
                                    )
                                }
                            </Form.Control>
                        </Row>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="ml-5 mr-auto" style={{display: 'block'}}>Credit aim</Form.Label>
                        <Form.Control className="ml-auto mr-auto mb-4" style={{width: 600}} as="textarea" rows={3} 
                        value={aim}
                        onChange={(e) => setAim(e.target.value)}
                        />
                        <Form.Label style={{marginLeft: 60}}>Other conditions</Form.Label>
                        <Form.Control className="ml-auto mr-auto" style={{width: 600}} as="textarea" rows={3} 
                        value={conditions}
                        onChange={(e) => setConditions(e.target.value)}
                        />
                    </Form.Group>
                    <Button className="mr-auto ml-auto mb-4" variant="outline-dark" onClick={send}>Submit</Button>
                </Form>
                
            </div>
            :
            <Carousel className="mt-4" style={{position: "relative"}}>
                {types.types.map(({id, name, description, img}) => 
                    <Carousel.Item key={id} interval={6000}>
                        <img
                        style={{width: 800}}
                        className="d-block"
                        src={require('../assets/img/' + img)}
                        alt={name}
                        />
                        <Carousel.Caption>
                            <h2 styles={{position: "relative"}}>
                                <a href={location + '/:' + id} style={{color: "white", textDecoration: "none"}}>{name}</a>
                            </h2>
                            <p style={{fontSize: 14}}>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
            }
            </div>
            </Card>
        </Container>
    );
});

export default Types;