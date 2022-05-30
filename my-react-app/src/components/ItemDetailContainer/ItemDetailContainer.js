import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../ItemDetail/ItemDetail";
import productServices from "../../mock/productMock";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  let param = useParams();
  let userID = param.id;

  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices(userID).then((res) => {
      setarrayItems(res);
      setIsLoading(false);
    });
  }, [userID]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="detailContainer">
            <ItemDetail items={arrayItems}></ItemDetail>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
