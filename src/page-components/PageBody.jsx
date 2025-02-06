import {Button, Card, Col, Container, Row} from "react-bootstrap"
// import { Cards } from "./component/Cards"
import { Products } from "./component/Products"
// import { FilterMenu } from "./component/FilterMenu"
import { useState, useEffect } from "react"


function PageBody() {

    const [catalogue, setCatalogue] = useState(Products)
    const [companies, setCompanies] = useState([])
    

    useEffect(()=>{
        const filterMenu = ['all',...new Set(Products.map((product)=> product.company))]
        setCompanies(filterMenu)
    },[])
  
    const filterProduct = (company) => {
        if(company === 'all'){
            setCatalogue(Products)
        }else{
            const filtered = Products.filter((product)=> product.company === company)
            setCatalogue(filtered)
        }
    }

    return (

        <Container>
            <Row>
                <Col><h1 className="py-3">Product Filter</h1></Col>
            </Row>
                <Col>
                    {companies.map((company, index) => (
                        <Button className="mx-1 mb-3" key={index} onClick={()=> filterProduct(company)}>{company}</Button>
                    ))}
                </Col>
            <Row>
                {catalogue.map((product, index)=>(
                    <Col key={index} className="col-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image}/>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.company}</Card.Text>
                                <Button variant="primary">{product.price}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        

    );
}


export {PageBody}