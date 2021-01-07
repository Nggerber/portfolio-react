import React from "react";
import AvatarImg from "./Avatar"
import Container from 'react-bootstrap/Container'




function HomePage(props) {
    return (
        <div>
            <h1 className="p-0 text-center font-weight-bolder">A Passion for Learning</h1>
            <Container className="avatar-div text-center" style={{width: "100%"}}>
                <AvatarImg />
            </Container>
            <h4 className="p-0 text-center p-5">HTML JavaScript CSS REACT MySQL MongoDB Socket.io</h4>
        </div>
    )
}

export default HomePage