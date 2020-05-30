import React from 'react';
import {Navbar,Nav,Card,CardDeck} from 'react-bootstrap';

class MainMenu extends React.Component{
    render(){
        return(
        <div>
            <Navbar bg="primary">
            <Navbar.Brand href="#home">
                {/* add brand logo here and give proper link.... */}
              <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Draughts.io"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link href="/profile">Profile    
                 {/* add img here ... */}
            </Nav.Link>
            
            <Nav.Link href="/login">Logout
                 {/* add img here ... */}
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

                <CardDeck>
                <Card>
                <a href='#'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>How To Play</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </a>
                </Card>
                <Card>
                <a href='#'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Play With  Bot</Card.Title>
                    <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </a>
                </Card>
                <Card>
                <a href='#'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Pass And Play</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </a>
                </Card>
               
                <Card>
                <a href='#'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Play In Room</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </a>
                </Card>
                
                <Card>
                <a href='#'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>History</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </a>
                </Card>

                </CardDeck>
            </div>
        );
    }
}
export default MainMenu;
