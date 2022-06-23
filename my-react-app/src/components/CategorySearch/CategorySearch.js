import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ItemList from "../ItemList/ItemList";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const CategorySearch = () => {
  const param = useParams();
  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "Collection"),
        where("category", "==", param.category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setarrayItems(docs);
      setIsLoading(false);
    };
    getItems();
  }, [param.category]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="container" style={itemContainer}>
            <ItemList items={arrayItems}></ItemList>
          </div>
        </>
      )}
    </div>
  );
};

export default CategorySearch;
