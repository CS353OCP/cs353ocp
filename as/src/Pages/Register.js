import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {Route, useNavigate} from "react-router-dom";
import axios from 'axios';
import {createUser} from "../api";
import "./Register.css"

const Register = () =>{
    const baseURL = 'http://localhost:5000/';
    const navigate  = useNavigate();
    const [regData, setRegData] = useState ({
        name: '',
        surname: '',
        email: '',
        password: '',

    });
    function validateForm() {
        return regData.email.length > 0 && regData.password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        createUser(regData);
        /*axios
            .post(baseURL, {
                name: regData.name,
                surname: regData.surname,
                email: regData.email,
                password: regData.password
            })
            .then((response) => {
                setRegData(response.data);
            });*/
        navigate('/home');
    }
    const Item = () => {
        let navigate = useNavigate();
        return (
            <>
              <Button onClick={() => navigate(-1)}> Back </Button> 
            </>
        );
    }

    return (
        <div className="register-wrapper">
            <div className="register-box">
                <div className="register-logo">
                    <span>E V E N T B R I T E</span>
                </div>
                <div className="register-box-inner">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="name"
                                value={regData.name}
                                onChange={(e)=>setRegData({ ...regData, name: e.target.value })}
                            />

                        </Form.Group>
                        <Form.Group size="lg" controlId="surname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                autoFocus
                                type="surname"
                                value={regData.surname}
                                onChange={(e)=>setRegData({ ...regData, surname: e.target.value })}
                            />

                        </Form.Group>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={regData.email}
                                onChange={(e)=>setRegData({ ...regData, email: e.target.value })}
                            />

                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={regData.password}
                                onChange={(e)=>setRegData({ ...regData, password: e.target.value })}
                            />
                        </Form.Group>
                        <div className="register-box-btns">
                            <Button block size="lg" type="submit" disabled={!validateForm()}>
                                Register
                            </Button>
                            <Item></Item>
                        </div>
                        
                    </Form>
                </div>
            </div>
            
        </div>
    );
}

export default Register;
