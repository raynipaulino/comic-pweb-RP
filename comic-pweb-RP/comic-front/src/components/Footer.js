import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "	#070000",
        color: "#FFFFFF",
        maxHeight: "108px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "Space-between",
        width: "100%",
        padding: "30px",
        marginTop: "55px",
  
      }}
    >
      <Container >
        <Row>
          <Col className="text-center py-7">
            <h2 style={{backgroundColor: "#070000"}}>Tech comic</h2>
           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
