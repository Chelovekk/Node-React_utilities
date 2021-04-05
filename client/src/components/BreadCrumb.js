import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb} from 'react-bootstrap'
import { useLocation } from 'react-router'

export default function CustomBreadcrumb (){
    const location = useLocation()
    
    var links=[];

    const ways = [
        {path:'/home', number:1},
        {path:'/products', number:1},
        {number:2}
        
    ]

    ways.map((nam, index)=>{
        if (nam.path ==location.pathname){
             links[index] = ways[index].path.substr(1)
             links=links[index].split('/')          
            return 0;
        } else {
            
             links[index] = location.pathname.substr(1)
            links=links[index].split('/')
            return 0;
        }
    })
    // console.log(1)
   var cont=''
    return(
        <Breadcrumb>
        {links.map((content)=>{
            cont += '/' + content
            return(
                <Breadcrumb.Item className="text-capitalize" href={cont}>{content}</Breadcrumb.Item>
            )
        })}
        </Breadcrumb>
    )
}