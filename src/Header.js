import React from 'react'
import {Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="section section-head">
            <p className="title text-center mt-4 mb-4">Test Fronted</p>
            <Nav className="justify-content-center" defaultActiveKey="/home">
                <Nav.Item >
                    <Nav.Link href="/" exact>Form</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/pokemon" exact>Pokemon</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/stock" exact>Stock</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/datetime" exact>Datetime</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/array" exact>Array</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header
