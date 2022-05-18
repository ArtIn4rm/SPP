import React, {useContext} from 'react'
import {Row, Select, Button, Container, Card, Carousel, ListGroup, FormText} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {useLocation} from 'react-router-dom'

const Types = observer(() => {
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

    return (
        <Container className='d-flex justify-content-center align-items-center'
        style={{paddingLeft: 0}}>
            <Card style={{width: 800, backgroundColor: !isId ? "white" : "#f8f9fb", borderColor: "white", marginTop: isId ? 60 : 0}}>
            <h1 style={{color: "#505050"}} className="ml-auto mr-auto mt-4">
                {!isId ? 'Credit types' : `Get ${typeById.name.toLowerCase()}`}
            </h1>

            {isId ? 
            <div style={{color: "#505050"}}>
                <h6 className="mr-auto ml-auto mt-4" style={{fontSize: 16, width: 600}}>{typeById.description}</h6>
                <ListGroup className="mr-auto ml-auto mt-4" style={{backgroundColor: "#f8f9fb", width: 400, boxShadow: [5, 5, 5, 5, "#000000"]}}>
                    <ListGroup.Item style={{fontWeight: "bold"}}>minimum procent per year - <span style={{color: "#ff834d"}}>
                        {`${typeById.procentPerYearLower*100}$`}</span></ListGroup.Item>
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
                            <input id="price" className="mr-auto" style={{width: 500}} type="range" min="0" max={typeById.maxPrice}/>
                        </Row>
                        <h4 className="ml-auto mr-auto mt-1" style={{width: 100}}>
                            
                        </h4>

                        <Row className="d-flex justify-content-between mt-5">
                            <Form.Control as="select" className="ml-auto" style={{marginLeft: 90, width: 200}}>
                                <option>Time to pay</option>
                                <option value="1">Month</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">Year</option>
                                <option value="24">2 Years</option>
                                <option value="60">5 Years</option>
                                <option value="120">10 Years</option>
                                <option value="240">20 Years</option>
                            </Form.Control>
                            <Form.Control as="select" className="ml-auto mr-auto" style={{width: 200}}>
                                <option>Agreed procent</option>
                                {
                                    procents.map((value) => {
                                        return <option value={value}>{`${value}%`}</option>
                                    })
                                }
                            </Form.Control>
                        </Row>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="ml-5 mr-auto" style={{display: 'block'}}>Credit aim</Form.Label>
                        <Form.Control className="ml-auto mr-auto mb-4" style={{width: 600}} as="textarea" rows={3} />
                        <Form.Label style={{marginLeft: 60}}>Other conditions</Form.Label>
                        <Form.Control className="ml-auto mr-auto" style={{width: 600}} as="textarea" rows={3} />
                        
                    </Form.Group>
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
            </Card>
        </Container>
    );
});

export default Types;

















/*
<Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />
                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>*/