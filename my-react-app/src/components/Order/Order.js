import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Order = () => {
  const [items, setitems] = useState([]);
  const param = useParams();

  useEffect(() => {
    const getItems = async () => {
      const docRef = doc(db, "Orders", param.id);
      const docSnap = await getDoc(docRef);
      let dataArray = [];

      if (docSnap.exists()) {
        const data = docSnap.data();
        
        for (const prop in data) {
          if (prop !== "buyer" && prop !== "id" && prop !== "total") {
            dataArray.push(data[prop]);
          }
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No hay resultados!");
      }
      setitems(dataArray);
    };
    getItems();
  }, [param.id]);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item.title}</td>
              <td>$ {item.item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Order;
