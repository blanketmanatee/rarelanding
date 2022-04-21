import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">What We Do</h2>
              <p className="description">
                Oklahoma Rare was founded by two Partners in Policymaking graduates.
                We are deeply commited to and involved in the Rare Disease community. 
                You can find more about the events we attend, or recommend on our Facebook
                page. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
