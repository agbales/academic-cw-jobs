import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, CardText } from "reactstrap";

const Example = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        { !isOpen ? 'Full Description' : 'Close' }
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {content.map(p => <p>{p}</p>)}
          </CardBody>
        </Card>
      </Collapse>
      { !isOpen && (
        <CardText>{content.join(" ").substr(0, 500)}...</CardText>
      )}
    </div>
  );
};

export default Example;
