import React, { useState, useContext } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { CartContext } from "../../Context/CartContext/CartContext";
import ThanksPage from "../ThanksPage/ThanksPage";

const ShippingInfo = () => {
  const [purchaseID, setPurchaseID] = useState("");
  let [items, setItems, total, setTotal] = useContext(CartContext);

  const onSubmit = async (e) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Orders"), {
      buyer: { ...e },
      ...items,
      total: total,
    });

    setPurchaseID(docRef.id);
    setItems([]);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group border border-4 border-dark mb-3">
            <Formik
              initialValues={{
                completeName: "",
                phone: "",
                email: "",
              }}
              validationSchema={Yup.object({
                completeName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                phone: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email addresss`")
                  .required("Required"),
              })}
              onSubmit={async (values, { resetForm }) => {
                onSubmit(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label htmlFor="completeName">Nombre:</label>
                  <Field
                    className="form-control mb-3"
                    id="completeName"
                    name="completeName"
                    placeholder="Nombre completo"
                  />
                  {errors.completeName && touched.completeName ? (
                    <div className="text-danger mb-3 ">{"requerido"}</div>
                  ) : null}

                  <label htmlFor="phone">Teléfono:</label>
                  <Field
                    className="form-control mb-3"
                    id="phone"
                    name="phone"
                    placeholder="5555-5555"
                  />
                  {errors.phone && touched.phone ? (
                    <div className="text-danger mb-3 ">{"requerido"}</div>
                  ) : null}
                  <label htmlFor="email">Email:</label>

                  <Field
                    className="form-control mb-3"
                    id="email"
                    name="email"
                    placeholder="usuario@email.com"
                    type="email"
                  />

                  {errors.email && touched.email ? (
                    <div className="text-danger mb-3">{"requerido"}</div>
                  ) : null}
                  <button className="btn btn-dark" type="submit">
                    Enviar
                  </button>
                </Form>
              )}
            </Formik>
            {purchaseID ? (
              <div>
                <ThanksPage purchaseID={purchaseID} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
