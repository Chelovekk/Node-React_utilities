import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function LinkCard({links}){
    if(!links.length){
        console.log(links)
        return <p className="center">Enougth</p>
    }
    return(
        <div className="container-fluid w-50 mt-3">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Кол-во кликов</th>
                        <th>Номер</th> 
                        <th>Куда</th>
                        <th>Ваша</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, index)=>{
                        return (
                         <tr>
                        <td>{link.clicks}</td>
                         <td>{index + 1}</td>
                         <td>{link.from}</td>
                         <td>{link.to}</td>
                         <td>
                            <Link to={`/detail/${link._id}`}>Open</Link>
                         </td>
                         </tr>
                        )
                    })  }
                </tbody>
            </Table>
        </div>
    )
}