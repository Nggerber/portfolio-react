import React from "react";
import avatar from "../../Images/avatar.png"
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'


function AvatarImg() {
    return (
        <Col>
            <Image src={avatar} alt="avatar" className="center" />
        </Col>
    )
}



export default AvatarImg;