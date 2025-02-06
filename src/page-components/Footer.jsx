import { Col, Container, Row } from "react-bootstrap"


function Footer(){
    const date = new Date().getFullYear()
    return(
        <>
            <Container fluid className="text-center py-5 mt-5" style={{backgroundColor: '#ddd'}}>
                <Row>
                    <Col text-center>
                        <h6>&copy; {date} | All Rights Reserved</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export {Footer}