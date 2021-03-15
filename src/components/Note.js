import React, { useRef, useContext, useState, useEffect } from "react";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import { CrudContext } from "../contexts/CrudContext";

export default function Note() {
  const noteRef = useRef();
  const [note, setNote] = useState("");
  const [clearInput,sendNoteHandler,getNoteHandler] = useContext(CrudContext);

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "60%" }}>
          <Card.Title as="h3" className="m-4">
            Add note
          </Card.Title>
          <Form>
            <Form.Group className="d-flex justify-content-center">
              <Row>
                <Form.Control
                  type="text"
                  className="m-4"
                  placeholder="write your note.."
                  ref={noteRef}
                  onChange={() => setNote(noteRef.current.value)}
                />
              </Row>
              <Row className="text-center m-4">
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    sendNoteHandler(note);
                    clearInput(noteRef);
                  }}
                >
                  Add
                </Button>
              </Row>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
