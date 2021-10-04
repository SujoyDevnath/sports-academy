import { Card, Col, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import './Courses.css'
const Courses = () => {
    const [courses] = useCourses();
    console.log(courses);
    return (
        <div>
            <h1 className="fw-bold">Our courses</h1>
            <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                {
                    courses.map(course => {
                        const { picture, title, duration, price, id } = course;
                        return (<Col key={id}>
                            <Card className="card">
                                <div className="img-container">
                                    <Card.Img variant="top" src={picture} className='image' />
                                </div>
                                <Card.Body>
                                    <h4 className="text-start">{title}</h4>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="price">${price}</span>
                                        <span className="duration rounded-pill">{duration}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })
                }
            </Row>
        </div>
    );
};

export default Courses;