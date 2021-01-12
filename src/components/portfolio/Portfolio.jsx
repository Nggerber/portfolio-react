import React from "react";
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import utahsnapshot from "../../Images/utahsnapshot.png"
import amalga from "../../Images/amalga.png"
import weatherdash from "../../Images/weatherdashboard.png"
import dayplanner from "../../Images/dayplanner.png"
import budget from "../../Images/budget.png"
import burger from "../../Images/burger.png"

function Portfolio(props) {
    return (
        <Container className="p-3">
            <h2 id="homepage-text"> Take a look at some of my Projects</h2>
            <Row>
                <Col>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={utahsnapshot} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2">Hello my name is Neal Gerber, I was born and raised in Boulder Colorado.
                        Utah's Snapshot is an outdoor recreation appliction
                        developed by Neal Gerber, Christian Boswell
                        and Sydney Goodwill. It is designed to be a full service recreation app for some of Utah's most
                        popular destinations. The application displays weather information and outdoor activities to do
                        in eight of Utah's top outdoor destinations.
                        <br />
                            <br />
                            <a href="https://nggerber.github.io/Recreation-Weather-Planner/">Link to Deployed
                            Application</a>
                            <br />
                            <br />
                            <a href="https://github.com/Nggerber/Recreation-Weather-Planner">My GitHub Pages Link</a>
                            <br/>
                            <br/>
                        </h6>
                    </Container>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={weatherdash} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2">The weather dashboard application provides the user
                        with a friendly UI to search for weather conditions
                        across the world using the Open Weather Api. They simply put it a city and the current
                        conditions and five day
                        forecast are displayed on the screen. Giving them access to the tempertaure, wind speed and
                        humidity to that area.
                        <br />
                        <br />
                        <a href="https://fast-woodland-71053.herokuapp.com/">Link to Deployed
                            Application</a>
                        <br />
                        <br />
                        <a href="https://github.com/Nggerber/amalganation">My GitHub Pages Link</a>
                        <br/>
                        <br/>
                        </h6>
                        
                    </Container>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={burger} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2">The Burger Logger is a fullstack aplication that uses mySQL to log the users burger creations. The user is allowed to make burger crteations in the input field. And then slect if these burgers have been eaten and these values are updated in the database.
                        <br/>
                        <br/>
                        <a href="https://afternoon-refuge-15473.herokuapp.com/">Link to Deployed Application</a>
                        <br/>
                        <br/>
                        <a href="https://github.com/Nggerber/your-burger-creator">My GitHub Pages Link</a>
                        <br/>
                        <br/>
                        </h6>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={amalga} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2 profile-text">Amalganation in the beginnings of a social media app
                        developed by Zach Lefleur, Sydney Goodwill, Diana Shull and Neal Gerber. The application allows
                        users to log in and access a game to play. The app utilizes sockets to create a realtime chat
                        that has four different chatrooms depending on what the users want to talk about. Amalganation
                        was developed as a way to connect users all across the world during a time of uncertainty and
                        social distancing.
                        <br/>
                        <br/>
                        <a href="https://nggerber.github.io/weather-dashboard/">Link to Deployed Application</a>
                        <br/>
                        <br/>
                        <a href="https://github.com/Nggerber/weather-dashboard">My GitHub Pages Link</a>
                        <br/>
                        <br/>
                        </h6>
                    </Container>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={dayplanner} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2">The work day planner is a simple but useful scheduler. It allows the user to input workday
                        requirements during hour timeblocks and as the day progresses these timeblocks are greyed out to
                        indicate that the time has passed.
                        <br/>
                        <br/>
                        <a href="https://nggerber.github.io/week-planner/">Link to Deployed Application</a>
                        <br/>
                        <br/>
                        <a href="https://github.com/Nggerber/week-planner">My GitHub Pages Link</a>
                        <br/>
                        <br/>
                        </h6>
                    </Container>
                    <Container className="p-2">
                        <Image id="portfolio-image" className="block-example border border-dark rounded mb-0 p-3" src={budget} fluid alt="me with my millenium falcon shirt" />
                        <h6 id="portfolio-text" className="block-example border border-dark rounded mb-0 p-3 mt-2">This budget tracker allows users to add and subtract funds from their account. All of this is displayed with a specific tag on an easy to read 
                        infographic. This application utilizes MongoDb to save the users dat online and IndexedDb to continue showing data while the app is offline.
                        <br/>
                        <br/>
                        <a href="https://github.com/Nggerber/budget-calculator">Link to Deployed Application</a>
                        <br/>
                        <br/>
                        <a href="https://shielded-ravine-76220.herokuapp.com/">My GitHub Pages Link</a>
                        <br/>
                        <br/>
                        </h6>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>

    )
}

export default Portfolio