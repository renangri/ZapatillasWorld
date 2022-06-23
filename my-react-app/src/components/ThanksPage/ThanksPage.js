import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

import { Link } from "react-router-dom";

const ThanksPage = (props) => {
  

  const iconCircle = {
    color: "green",
  };

  return (
    <div className="container mt-5 mb-2">
      <div>
        <FaCheckCircle className="h1" style={iconCircle} />
      </div>
      {props.purchaseID !== "" ? (
        <div>
          <h5>
            Gracias. Su orden fue confirmada su id de transacción es:
            {props.purchaseID}
          </h5>
          <Link to={`/order/${props.purchaseID}`}>
            <button className="btn btn-outline-success">Ver tu orden</button>
          </Link>
        </div>
      ) : (
        <Link to="/orders">
          <button className="btn btn-outline-success">
            Ver todas las ordenes
          </button>
        </Link>
      )}
    </div>
  );
};

export default ThanksPage;
