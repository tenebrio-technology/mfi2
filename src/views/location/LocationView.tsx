import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import './locationview.scss';
import { Faq } from "./components/Faq"; 

export const LocationView = () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Locations</h1>
        <Container fluid>
          <Row>
            <Col className='px-0'>
              <Card>
                <Card.Body>
                  <Card.Title>Status</Card.Title>
                  <p>12 Sites</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col className='ms-auto'>
        <Faq/>
      </Col>
    </Row>

    <Row>
      <Col>
        <Table striped hover>
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
);
