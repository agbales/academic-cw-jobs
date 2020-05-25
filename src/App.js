import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data/data.json";
import Header from "./Header";
import Collapse from "./Collapse";
import { Container, Card, CardBody, CardTitle } from "reactstrap";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        {data.map(d => (
          <>
            <Card key={d.title}>
              <CardBody style={{ marginBottom: "20px" }}>
                <CardTitle>
                  <b>{d.title}</b>
                </CardTitle>
                <Collapse title={d.title} content={d.content.filter(entry => entry !== 'Edit')} />
              </CardBody>
            </Card>
            <br />
          </>
        ))}
      </Container>
    </div>
  );
}
