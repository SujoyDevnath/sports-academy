import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../../Hooks/useCourses';

const TopCourses = () => {
    const [courses] = useCourses();
    const filteredCourses = courses.filter(course => course.id <= 4)
    return (
        <div className="container">
            <h1 className="py-5 fw-bold">Top Courses</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    filteredCourses.map(fCourse => {
                        const { picture, title, duration, price, id } = fCourse;
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
            <Link to="/courses"><button className="btn btn-success my-5 px-3 fw-bold">See more</button></Link>
        </div>
    );
};

export default TopCourses;