import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../library/axios';



export default function CreatePlayer({ onRefresh }) {
    const refUsername = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const refExp = useRef();
    const [succes, setSucces] = useState(false);

    const onSumbit = (e) => {
        e.preventDefault();
        const dataPlayer = {
            username: refUsername.current.value,
            email: refEmail.current.value,
            password: refPassword.current.value,
            experience: refExp.current.value,
        };
        axios
            .post("/api/v1/players", dataPlayer)
            .then((data) => {
                if (data.status !== 201) {
                    alert("Please try again");
                }
                setSucces(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (succes) {
        console.log(succes);
        window.location = "/";
    }

    return (
        <Container>
            <Row md={2}>
                <Form>
                    <h1> Make New Player </h1>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" ref={refUsername} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={refEmail} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={refPassword} placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control type="number" ref={refExp} placeholder="Enter experience" />
                    </Form.Group>

                    <Button className='btn btn-succes btn-sm' type="submit" onClick={onSumbit}>
                        Submit
                    </Button>
                    
                    <Button className='btn btn-danger btn-sm' type="Reset">
                        Reset
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}