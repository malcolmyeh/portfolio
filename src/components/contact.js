import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const ContactForm = () => {
    return (
        <Form>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your Name" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="name@example.com" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" id="message" />
                    </FormGroup>
                </Col>
            </Row>
            <Button>Submit</Button>
        </Form>
    )
}

const Contact = () => {
    return (
        <div id="contact" style={{
            "padding-top": "8vh",
            "padding-left": "5vw",
            "padding-right": "5vw",
            "padding-bottom": "8vh"
        }}>
            <h1>CONTACT</h1>
            {ContactForm()}
        </div >
    );
};

export default Contact;