import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function BookNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/books">books</Link>
            </Container>
        </Navbar>
    )
}
