<<<<<<< HEAD
=======

>>>>>>> 06b69ce48c1a2444d97868f26f7a0e28aae43890
import React from "react";
import JournalComponent from "../components/Journal/JournalComponent";
import PostsList from "../components/Journal/PostsList";
import { Col, Row, Container } from "../components/Journal/JournalGrid";

function JournalPage(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <JournalComponent />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
}

export default JournalPage;
<<<<<<< HEAD
=======

>>>>>>> 06b69ce48c1a2444d97868f26f7a0e28aae43890
