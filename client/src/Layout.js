import React, { Component } from 'react';
import { Col, Nav, Navbar } from 'react-bootstrap';

class Layout extends Component {
  render() {
    return (
  <Col md={12}>
      <Navbar>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#">Object-Editor</a>
     </Navbar.Brand>
   </Navbar.Header>
   <Nav>

   </Nav>
   </Navbar>

      {this.props.children}

      </Col>

    );
  }
}

export default Layout;
