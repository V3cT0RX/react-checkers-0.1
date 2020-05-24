import React from 'react';
import {Form, Button} from 'react-bootstrap';


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
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.onChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.onChange} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.onClick}>
                Submit
            </Button>
        </Form>
        );
    }
}

export default LoginForm;

