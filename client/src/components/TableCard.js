import React, {useEffect, useState} from 'react'
import {Container, Table, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TableCard({ info }) {
    const [count, setCount] = useState(0);

    

    return(
        <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Date</th>
                <th>Counter Data</th>
                </tr>
            </thead>
            <tbody>
            {info.map((data)=>{
            return(
            <tr>
                <td>{data.date}</td>
                <td>{data.counter_data}</td>
            </tr>
            )
           })}
                
            </tbody>
        </Table>
        </Container>
)}
