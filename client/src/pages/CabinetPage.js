import React, { useContext, useEffect, useState, useCallback } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Form, Button, Row, Container} from 'react-bootstrap'
import useHttp from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import TableCard from '../components/TableCard'
import Loader from '../components/Loader'

export const CabinetPage = () => {
    const [counterData, setCounterData]  = useState('')
    const [info, setInfo] = useState(null)
    const {request, loading} = useHttp()
    const auth = useContext(AuthContext)
    const [sectionStates, setSectionStates] = useState(['primary','secondary','secondary','secondary']);
    const buttonHandler = (event) => {
        let states = ['primary','secondary','secondary','secondary']
        console.log(event.number)
        setSectionStates(states)
    }
    const sumbitHandler = async event => {
            try{
                const data = await request('/api/cabinet/generate', 'POST', {counter_data: counterData}, {
                    Authorization: `Bearer ${auth.token}` 
                })
                // history.push(`/detail/${data.link._id}`)
                window.location.reload(false);

            } catch(e){}
    }
    const getInfo = useCallback(async () => {
        try{
            const fetched = await request('/api/cabinet', 'GET', null, {
                Authorization: `Bearer ${auth.token}`     
            })
            setInfo(fetched)
        }
        catch(e){}
    }, [request, auth.token])
    useEffect(() => {
        getInfo()
      }, [getInfo])
    //   console.log(info)
    if (loading) {
        return <Loader />
      }

    return(
        <Container>
            <Row  className="mt-5" >
                <Col >
                    <Button variant={sectionStates[2]} number = '0' onClick = {buttonHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                            <p >Личная информация</p>
                    </Button>
                </Col>
                <Col  >
                <Button variant={sectionStates[1]} number = '1' onClick = {buttonHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                <p>Добавить запись</p>
                </Button>

                </Col>
                <Col  >
                <Button variant={sectionStates[2]} number = '2' onClick = {buttonHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                    </svg>
                    <p>Счет</p>
                </Button>
                </Col>
                <Col  >
                <Button variant={sectionStates[3]} number = '3' onClick = {buttonHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
                        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
                    </svg>
                    <p>fr</p>

                </Button>
                </Col>
            </Row>
        <div className="container-fluid h-100 mt-5" >
            
            <Row xs={4} md={5} className="justify-content-around">
                <Col className="">
                <Form.Control type="text" placeholder="enter data" id ="link" value={counterData} onChange={e=>setCounterData(e.target.value)}/>
                <Button variant="primary" type="submit" onClick={sumbitHandler} className="mt-3">
                    Submit
                </Button>
                </Col>
                <Col>
              { !loading && info && <TableCard info = {info} /> }
              </Col>
            </Row>
        </div>
    </Container>
        )
}