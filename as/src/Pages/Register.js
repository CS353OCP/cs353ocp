import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {Route, useNavigate} from "react-router-dom";
import axios from 'axios';
import {createUser, loginReq, register} from "../api";
import "./Register.css"

const Register = (props) =>{
    const navigate  = useNavigate();
    const [regData, setRegData] = useState ({
        name: '',
        age: '',
        email: '',
        password: '',

    });
    function validateForm() {
        return regData.email.length > 0 && regData.password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        let data = {
            name: regData.name,
            surname: regData.surname,
            email: regData.email,
            password: regData.password
        }
        let res = false;
        res = await register(regData.name, regData.age, regData.email, regData.password);
        console.log(res);
        if (res === true) {
            props.loginButton();
            navigate('/home');
        } else {
            navigate("/LoginFailed");
        }
        //props.loginButton();
        //navigate('/home');
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
                    <div style={{color:"#fff"}}>E V E N T <span style={{color:"#B9E0FF"}}>B R I T E</span></div>
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
                        <Form.Group size="lg" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                autoFocus
                                type="age"
                                value={regData.age}
                                onChange={(e)=>setRegData({ ...regData, age: e.target.value })}
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
                            <Button block size="medium" type="submit" disabled={!validateForm()} style={{marginRight:'2rem'}}>
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
