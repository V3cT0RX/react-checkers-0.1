import React from 'react';
import {Navbar,Form, Button,Card,Col} from 'react-bootstrap';


class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {email: null, password: null, firstName: '', lastName: '', confirmPassword: null};
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this);
        this.firstNameHandler =this.firstNameHandler.bind(this);
    };

    onChange = e => {
        this.setState({[e.target.type]: e.target.value});
    }

    confirmPasswordHandler = e => {
        if (e.target.value !== this.state.password){
            console.log("wrong");
        }else{
            this.setState({confirmPassword: e.target.value});
        }
    }

    firstNameHandler = e => {
            this.setState({firstName: e.target.value});
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
                 <a href="/login">Login</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
         
        <Card className="text-center" bg='Primary'  style={{ width: '30rem'}}>
            <Card.Header>REGISTRATION</Card.Header>
            <Card.Body>
                <Card.Text>
            <Form onClick={this.onClick} action="/main-menu">
                <Form.Group controlId="formBasicFname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" className="form-control" onChange={this.firstNameHandler} placeholder="First name" required />
                </Form.Group>
               
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.onChange} placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassward">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.onChange} placeholder="password"required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassward">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" onChange={this.confirmPasswordHandler} placeholder="confirm password" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                Sign-Up
                </Button>

                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </Form>

                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Thank You</Card.Footer>
        </Card>
            </div>
        );
    }
}

export default SignUp;

