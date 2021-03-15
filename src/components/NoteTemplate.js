import React from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { fire } from "../firebase";

export default function NoteTemplate(props) {
  const deleteNote = () => {
    const noteRef = fire.database().ref("Notes").child(props.id);

    console.log(props.id);
    noteRef.remove();
  };

  const updateNote = () => {
    const noteRef = fire.database().ref("Notes").child(props.id);
    noteRef.update({
      note: "Done",
    });
  };
  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <Card.Title className="m-2">{props.note}</Card.Title>
          </Col>
          <Col>
            <Button className="m-2" variant="danger" onClick={deleteNote}>
              Delete
            </Button>
            <Button variant="success" onClick={updateNote}>
              Update
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
