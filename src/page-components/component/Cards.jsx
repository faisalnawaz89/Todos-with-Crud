import { Button, Card } from "react-bootstrap"

function Cards () {
    return(
        <>
            <Card className="col-lg-3" style={{paddingTop: '0.8rem' }}>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button variant="primary"></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export {Cards}