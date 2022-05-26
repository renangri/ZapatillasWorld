import React from "react";
import { Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = (item) => {
  return (
    <div className="items">
      {/* estoy usando cards de react-bootstrap para los estilos, además, estoy
			llamando ItemCount como parte de su cuerpo, teniendo como parte del
			mismo div los botones de subida y bajada. */}

      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Text>
          <br />
          <span>{item.title}</span>
          <br />
          <span>
            <span>${item.price}</span>
          </span>
        </Card.Text>
        <Link to={`/detail/${item.id}`}>
          <Card.Img
            variant="top"
            src={item.pictureUrl}
            alt="foto de producto"
          />
        </Link>
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0" variant="dark">
              <Accordion.Header>¡Lo quiero!</Accordion.Header>
              <Accordion.Body>
                <span>{item.description}</span> <br /> <br />
                {/* aquí llamo el componente ItemCount */}
                <ItemCount
                  stock={item.stock}
                  initial={item.initial}
                ></ItemCount>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
};

export default Item;
