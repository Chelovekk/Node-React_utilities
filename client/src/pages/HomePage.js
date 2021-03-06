import React, { useCallback, useContext, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import useHttp from '../hooks/http.hook'
import LinksList from '../components/LinksList'
import { Carousel , Row, Card, Col, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const HomePage = () => {
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const history = useHistory()

    const emailHandler = event =>{
        setEmail(event.target.value)
    }
    const sendEmailHandler = async() =>{
        try{
        await request('api/home/email','POST', {email:email},{
            Authorization: `Bearer ${token}` 
        })
        }catch(e){

        }
    }
    const authorizationHandler = () =>{
        // if(localStorage.getItem('userData')){
        //     history.push('/create')
        // } else{
        //     history.push('/auth')
        // }
        history.push('auth')
    }

    if(loading){
        return <Loader />
    }

    return(
        <div style={{width:"80%", margin:"auto"}}>
           <Carousel className="w-75  mt-3 container-fluid">
            <Carousel.Item >
                <img
                className="d-block w-100"
                src="https://cv.dsoua.com/shared/uploads/crops/1/0005f0fc3f123d1f48d4e2c3e16be7ab_0.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cv.dsoua.com/shared/uploads/crops/35/fd5e11309e71c4f0a41748c7480e2def_0.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
         <Container fluid className="w-100 mt-3">
            <Row>
                <Col lg="6">
                <Row className="  justify-content-around ml-5"  xs={2} md={2}>
                
                <Col className="mt-1">   
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title >???????????????????? ??????</Card.Title>
                                <Card.Text>?????? ?????????? ????????????????</Card.Text>
                                <Card.Text>???????????????????????????? ?? ?????????????? ??????????</Card.Text>
                                <Card.Text>?????????????????? ????????</Card.Text>
                                <Card.Link >Card Link</Card.Link>
                                <Card.Link >Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-1">   
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title >???????????????????? ??????</Card.Title>
                                <Card.Text>?????? ?????????? ????????????????</Card.Text>
                                <Card.Text>???????????????????????????? ?? ?????????????? ??????????</Card.Text>
                                <Card.Text>?????????????????? ????????</Card.Text>
                                <Card.Link >Card Link</Card.Link>
                                <Card.Link >Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-1">   
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title >???????????????????? ??????</Card.Title>
                                <Card.Text>?????? ?????????? ????????????????</Card.Text>
                                <Card.Text>???????????????????????????? ?? ?????????????? ??????????</Card.Text>
                                <Card.Text>?????????????????? ????????</Card.Text>
                                <Card.Link >Card Link</Card.Link>
                                <Card.Link >Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-1">   
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title >???????????????????? ??????</Card.Title>
                                <Card.Text>?????? ?????????? ????????????????</Card.Text>
                                <Card.Text>???????????????????????????? ?? ?????????????? ??????????</Card.Text>
                                <Card.Text>?????????????????? ????????</Card.Text>
                                <Card.Link >Card Link</Card.Link>
                                <Card.Link >Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col> 
                </Row>
                </Col>
                <Col>
                    <Container fluid>
                        <Button variant="outline-primary" className="mt-1" onClick={authorizationHandler} style={{height : "100px"}}block>Authorization</Button>
                        <Card className="mt-5" style={{ width: '100%'}}>
                            <Card.Body  style={{margin:"auto"}} >
                                <Card.Title >?????????????????????? ???? ????????????????</Card.Title>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    </InputGroup.Prepend>
                                    <FormControl
                                    placeholder="E-mail"
                                    aria-label="E-mail"
                                    name="email"
                                    onChange={emailHandler}
                                    />
                                </InputGroup>
                                <Button style={{ width: '100%'}} onClick={sendEmailHandler}>??????????????????</Button>

                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
    </Container>
    </div>  
    )
}