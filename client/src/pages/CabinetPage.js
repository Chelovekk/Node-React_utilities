import React, { useContext, useEffect, useState, useCallback } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Form, Button, Row, Table} from 'react-bootstrap'
import useHttp from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import TableCard from '../components/TableCard'
import Loader from '../components/Loader'

export const CabinetPage = () => {
    const [counterData, setCounterData]  = useState('')
    const [info, setInfo] = useState(null)
    const {request, loading} = useHttp()
    const auth = useContext(AuthContext)
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
        <div className="container-fluid h-100 mt-5" >
            <Row xs={4} md={5} className="justify-content-around">
                <Col className="">
                <Form.Control type="text" placeholder="enter data" id ="link" value={counterData} onChange={e=>setCounterData(e.target.value)}/>
                <Button variant="primary" type="submit" onClick={sumbitHandler} className="mt-3">
                    Submit
                </Button>
                </Col>
              {/* <TableCard></TableCard> */}
              { !loading && info && <TableCard info = {info} /> }

            </Row>
                

            
        </div>
    )
}