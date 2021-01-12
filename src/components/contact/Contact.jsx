import React from "react";
import Form from "react-bootstrap/Form";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true
        })
    }


    render() {
        return (
            <div>
            <h1 id="homepage-text" className="text-center">Let's Connect</h1>
            
            <Form onSubmit={this.handleSubmit} style={{ width: "500px"}} className="ml-5 mt-5">
                <Form.Group>
                    <Form.Label id="homepage-text" htmlFor="full-name">Full Name</Form.Label>
                    <Form.Control id="full-name" name="name" type ="text" value={this.state.name}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label id="homepage-text" htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" name="email" type ="text" value={this.state.email}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label id="homepage-text" htmlFor="message">Message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea" row ="3" value={this.state.message}></Form.Control>
                </Form.Group>

                <button className="d-inline-block" variant="primary" type="submit" disable={this.state.disable}>Send</button>

                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                {this.state.emailSent === false && <p className="d-inline error-msg">Email Sent</p>}
            </Form>
            <div id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 ml-5 mt-5" style={{ width: "500px"}}>
                    <h4 id="portfolio-text" class="card-subtitle mb-2 text-muted">Or you can Contact me Directly at...</h4>
                    <p class="card-text"> Email: neal.g.gerber@gmail.com</p>
                    <p class="card-text">Phone: (303) 517 2008</p>
                   
                    </div>
            </div>
        );
    }
}

export default Contact