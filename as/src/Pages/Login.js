import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {Route, useNavigate} from "react-router-dom";
import {loginReq} from "../api";


export default function Login(props) {
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

    const LogIn = async () => {
        //login(email, password)
        console.log(email);
        let res = false;
        res = await loginReq(email, password);
        console.log(res.data);
        if(res.data.succesfullLogin === true){
            props.loginButton(res.data.id);
        }
        else{
            navigate("/LoginFailed");
        }


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
                <div style={{color:"#fff"}}>E V E N T <span style={{color:"#B9E0FF"}}>B R I T E</span></div>
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
                            <Button onClick={LogIn} block size="medium" type="submit" disabled={!validateForm()} style={{marginRight:'2rem'}}>
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
