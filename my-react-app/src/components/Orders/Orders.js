import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  let finishedOrders = [];

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "Orders"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setOrders(docs);
    };
    getItems();
  }, []);

  const pointer = {
    cursor: "pointer",
  };

  orders.map((order) => {
    let date = "";
    let total = 0;
    let id = "";
    for (const prop in order) {
      if (prop !== "buyer" && prop !== "id" && prop !== "total")
        date = order[prop].date;
      if (prop === "total") total = order[prop];
      if (prop === "id") id = order[prop];
    }
    finishedOrders.push({ id, date, total });
    return null;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <table className="table table-hover" style={pointer}>
            <thead className="thead-light">
              <tr>
                <th>Orden</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {finishedOrders.map((order, index) => (
                <tr key={index}>
                  <th>
                    # <Link to={`/order/${order.id}`}>{order.id}</Link>
                  </th>
                  <td>{order.date}</td>
                  <td>$ {order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
