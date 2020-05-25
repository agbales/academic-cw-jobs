import React from "react";
import { Jumbotron } from "reactstrap";

export default function Header() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Creative Writing 2020</h1>
        <p className="lead">
          Styling changes only from information gathered at the{" "}
          <a href="https://academicjobs.wikia.org/wiki/Creative_Writing_2020">
            academic jobs wiki
          </a>
          .
        </p>
      </Jumbotron>
    </div>
  );
}
