import React from "react";
import AvatarImg from "./Avatar"
import Container from 'react-bootstrap/Container'




function HomePage(props) {
    return (
        <div id="background">
            <h1 id="homepage-text" className="p-0 text-center font-weight-bolder">A Passion for Learning</h1>
            <Container className="avatar-div text-center" style={{width: "100%"}}>
                <AvatarImg style={{height: "50px"}} />
            </Container>
            <h4 id="homepage-text" className="p-0 text-center p-6 mb-3">HTML JavaScript CSS REACT MySQL MongoDB Socket.io</h4>
        </div>
    )
}

export default HomePage