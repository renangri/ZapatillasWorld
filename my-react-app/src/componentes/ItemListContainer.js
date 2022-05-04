// <h1>{this.props.greeting}</h1> indico que va a haber una props que se va a llamar greetings.
//Props es una caracteristica especial que obtengo al hacer un extends Component. Component viene directamente de React es una clase heredada.

import { Component } from "react";
import { Table } from "react-bootstrap"; //Me traigo la tabla de react-bootstrap y abajo la inserto

export default class ItemListContainer extends Component {
  render() {
    return (
      <>
        <div>
          <h1>{this.props.greeting}</h1>
        </div>
        <div className="container">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Descripcion</th>
                <th>Precio unitario</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Zapatillas nike</td>
                <td>$10.000</td>
                <td>$20.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Zapatillas addidas</td>
                <td>$10.000</td>
                <td>$20.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Zapatillas fila</td>
                <td>$10.000</td>
                <td>$20.000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}