import React from 'react';
import {Navbar,Form, Button,Card} from 'react-bootstrap';


class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {email: null, password: null};
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    };
    
    onChange = e => {
        this.setState({[e.target.type]: e.target.value});
    }

    onClick(){
        console.log("on CLick", this.state);
    }

    render(){
        console.log(this.state);
        return (
        <div>
            <Navbar>
            <Navbar.Brand href="#home">Draughts.io</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                 <a href="/sign-up">SignUp</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        
        <Card className="text-center" bg='Primary' style={{ width: '30rem' }}>
            <Card.Header>LOGIN</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Form onClick={this.onClick} action="/main-menu">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={this.onChange} placeholder="Enter email" required="required"/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={this.onChange} placeholder="Password" required="required"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                       
                        <Button  variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Thank You</Card.Footer>
        </Card>
        </div>
        );
    }
}

export default LoginForm;

