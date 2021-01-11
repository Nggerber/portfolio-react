import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Footer() {
    return (
        <div id="background">
            <footer className="mt-5 bg-dark fixed-bottom" sticky="bottom">
                <Container fluid={true}>
                    <Row className="justify-content-between p-3">
                        <Col className="p-0 text-center text-warning font-weight-bold">
                            Neal Gerber
                    </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;