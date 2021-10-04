import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    // getting and storing data from members
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div>
            <h1 className="pt-5">Our responsible members</h1>
            <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                {
                    // maping members
                    members.map(member => {
                        // destructuring member
                        const { id, picture, name, designation } = member;
                        return (
                            <Col key={id}>
                                <img src={picture} className="rounded-circle mb-5" style={{ height: "200px" }} />
                                <h4>{name}</h4>
                                <p>{designation}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default About;