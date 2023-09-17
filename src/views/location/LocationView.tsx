import { Container, Row, Col, Card, Table } from "react-bootstrap"; 
import "./locationview.scss"; 

export const LocationView = () => 

<Container fluid>
  <Row>
    <Col>
    <h1>Locations</h1>
    <Container fluid>
      <Row>
        <Col className="px-0">
        <Card>
          <Card.Body>
            <Card.Title>Status</Card.Title>
            <p>12 Sites</p>
            <p>12 Sites</p>
            <p>12 Sites</p>
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>
    </Col>
    <Col className="ms-auto">
    <Card className="location-faq mt-1">
    <Card.Body>  
    <Card.Title>Locations faq</Card.Title>
    <ul>
    <li>Use locations to keep track of resources.</li>
    <li>Locations can contain other locations, allowing you specify down to a granularity which suits your needs.</li>
    <li>A location can have sensors attached, providing real-time environmental data which is automatically attached to all items contained within the location</li>
    </ul>
    </Card.Body>
  </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Table striped hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>xxxxx</td>
          <td>xxxxx</td>
          <td>xxxxx</td>
          </tr>
          <tr>
          <td>xxxxx</td>
          <td>xxxxx</td>
          <td>xxxxx</td>
          </tr>
          <tr>
          <td>xxxxx</td>
          <td>xxxxx</td>
          <td>xxxxx</td>
          </tr>
          <tr>
          <td>xxxxx</td>
          <td>xxxxx</td>
          <td>xxxxx</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Row>

</Container> 