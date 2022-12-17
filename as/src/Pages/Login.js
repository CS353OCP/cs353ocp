import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {Route, useNavigate} from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/Home');
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
        <div className="login-wrapper">
            <div className="login-box">
                <div className="login-logo">
                    <span>E V E N T B R I T E</span>
                </div>
                <div className="login-box-inner">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                        <Form.Group size="" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </Form.Group>
                        <div className="login-box-btns">
                            <Button block size="medium" type="submit" disabled={!validateForm()} style={{marginRight:'2rem'}}>
                            Login
                            </Button>
                            <Item></Item>
                        </div>
                        
                    </Form>
                </div>
                
            </div>
            
           
        </div>
    );
}
