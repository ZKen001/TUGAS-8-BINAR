import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "../library/axios";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";

export default function Home({ refresh }) {
    const [players, setPlayers] = useState([]);
    const loadPlayers = () => {
        axios
            .get("/api/v1/players")
            .then((data) => {
                setPlayers([]);
                setPlayers(data.data.data);
            })
            .catch(() => {
                alert("Please Check Again")
            });
    };
    useEffect(() => {
        loadPlayers();
    }, [refresh]);

    return (
        <Container fluid>


            <h1>Player History  </h1>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container fluid>
                <Nav className="me-auto"
                        style={{  justifyContent: 'center'}}> 
                
            </Nav>
                <Nav className="me-auto"
                        style={{  justifyContent: 'center'}}> 
                
                
            </Nav>
                    <Nav
                        className="me-auto"
                        style={{ text: 'text-decoration-none',  }}
                    >
                        <Button variant="outline-danger"><NavLink to={"/player/create"}>-- Membuat Player Baru --</NavLink></Button>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Cari"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button>Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <br></br>
            <Container fluid>

                <table className="table table-bordered">
                    <thead striped bordered hover>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th>EXP</th>
                            <th>LEVEL</th>
                            <th>Create</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players &&
                            players.map((players, key) => (
                                <tr key={key}>
                                    <td>{players.id}</td>
                                    <td>{players.username}</td>
                                    <td>{players.email}</td>
                                    {/* <td>{players.password}</td> */}
                                    <td>{players.experience}</td>
                                    <td>{players.lvl}</td>
                                    <td>{players.createdAt}</td>
                                    <td>{players.updatedAt}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </Container>
            <Nav className="me-auto"
                        style={{  justifyContent: 'center'}}> 
                
                <Button variant="outline-warning"><NavLink to={"/docs"}>Swagger REST API </NavLink></Button>
                
            </Nav>

        </Container >
    );
}