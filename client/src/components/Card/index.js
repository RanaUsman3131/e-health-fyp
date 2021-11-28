import React from "react";
import Card from "react-bootstrap/Card";

export default function Index({ className, children, ...props }) {
  return (
    <>
      <Card
        className={`card-container border-0  position-relative my-4 p-2 ${className}`}
        {...props}
      >
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
}
