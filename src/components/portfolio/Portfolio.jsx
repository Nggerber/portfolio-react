import React from "react";
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

function Portfolio(props) {
    return (
        <Container>
                <Row>
                    <Col>
                        <Image className="block-example border border-dark rounded mb-0" src={} fluid alt="me with my millenium falcon shirt" />
                    </Col>
                    <Col sm={5}>
                        <h6 className="block-example border border-dark rounded mb-0 p-1">Hello my name is Neal Gerber, I was born and raised in Boulder Colorado.
                        Growing up so close to the mountains had a profound impact on me. Be it
                        backpacking in the Rocky Mountains, trail running around town or rock
                        climbing I felt at home outdoors. This respect for the outdoors took me to Eugene
                        Oregon for my undergraduate degree of biology but it really served to fuel
                        my passion for rock climbing. After school I moved to Salt Lake City to be closer
                        the mountains and see how far I could push my climbing. After six years of working
                        in the outdoor industry I sought a career change that would support my lifestyle
                        and encourage my creativity. For this I turned to my I turned to my other passion
                        is suprisingly computers. I've always enjoyed messing around on a computer, playing
                        video games or exploring the far reaches of the interenet. During highschool I had
                        taken several coding courses in Java and C++ which I thouroghly enjoyed so much so that
                        I took a couple more in college. Unfortunately I never viewed computer science as
                        a career path until now. This has led me to the fullstack program where I hope to
                        lay the foundation for a new career in web development. I think that I will be able to apply
                        my hardworking personality to the world of web development and really be an excellent addition to any
                    team.</h6>
                    </Col>
                </Row>
            </Container>
  
    )
}

export default Portfolio