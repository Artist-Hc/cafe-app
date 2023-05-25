import React, { useState } from 'react'
import data from "../data"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CardMenu from '../companents/CardMenu';


const AppMenu = () => {
  const [search, setSearch] = useState("");
  return (
    <>
    <Form.Control
        placeholder="Search Player..."
        type="search"
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((item) => {
              return (
                <Col md={6} lg={4} xl={3} key={item.id}>
                  <CardMenu {...item} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  )
}

export default AppMenu