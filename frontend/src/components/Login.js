import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Container } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
            console.log(error);
            alert("Enter proper credentials!");
        }
    };

    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
        <div className="body1">
            <Container>
                <Row>
                    <Col>
                        <div className="title" >facebook</div>
                        <p className='tagline'> Facebook helps you connect and share <br></br>with the people in your life</p>
                    </Col>

                    <Col>
                        <div className="p-4 box">
                            <p className='loginbox'>Facebook login</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email address"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="Submit">
                                        Log In
                                    </Button>
                                </div>
                            </Form>

                            <br></br>

                            <p><a className='fgp' href='/'>Forgotten password?</a></p>
                            <br></br>
                            <div>
                                <GoogleButton
                                    className="g-btn"
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>
                            <hr />
                            <div className="p-4 box mt-3 text-center">
                                Don't have an account? <Link to="/signup">Sign up</Link>
                            </div>
                            <br></br>
                            <br></br>
                            <p className='CNP'>
                                <a className='CNPlink' href='/'>Create a Page </a>
                                for a celebrity, brand or business.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
};

export default Login;