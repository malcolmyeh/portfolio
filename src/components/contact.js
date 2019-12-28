import React, { useReducer } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import * as emailjs from 'emailjs-com';

const ContactForm = () => {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            email: '',
            message: '',
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput({ [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, message } = userInput;
        let templateParams = {
            from_email: email,
            from_name: name,
            to_name: 'mcyeh@edu.waterloo.ca',
            message_html: message,
        };
        emailjs.send(
            'outlook',
            'portfolio_website',
            templateParams,
            'user_NN3yfIn7zRCw3fs9WylVn'
        );
        setUserInput({name: '',email:'',message:''});
    };

    const { name, email, message } = userInput;
    return (
        <Form onChange={handleChange}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" value={name}placeholder="Your Name" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" value={email} placeholder="name@example.com" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" name="message" value={message}/>
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleSubmit}>Send</Button>
        </Form>
    )
}

const Contact = () => {
    return (
        <div id="contact" style={{
            "paddingTop": "8vh",
            "paddingLeft": "5vw",
            "paddingRight": "5vw",
            "paddingBottom": "8vh"
        }}>
            <h1>CONTACT</h1>
            {ContactForm()}
        </div >
    );
};

export default Contact;