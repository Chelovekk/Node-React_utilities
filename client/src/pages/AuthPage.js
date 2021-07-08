import React, { useContext, useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {  Button, Form, Modal } from 'react-bootstrap'
import useHttp from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const AuthPage = () => {

    
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory()
    const auth = useContext(AuthContext)
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    
    useEffect(()=>{
        // alert(error)
    }, [error])
    const changeHandler = event => {
        setForm({...form,[event.target.name]:event.target.value})
    }
    const registerHandler = async()=>{
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data)
        }catch(e){
            handleShow()
        }
    }
    const loginHandler = async()=>{
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            if(auth.login(data.token, data.userId)){
                history.push('cabinet')
            }
        }catch(e){
            handleShow()

        }
    }
  
    return(
    
        <>
        
            <div className="container-fluid w-25 p-3">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={form.email} onChange={changeHandler}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={registerHandler} disabled={loading} className="mr-2">
                    Reg
                </Button>
                <Button variant="primary" type="submit" onClick={loginHandler} disabled={loading}>
                    Log in
                </Button>
             </Form>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Неверные данные</Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>
        </>

        
    )
}