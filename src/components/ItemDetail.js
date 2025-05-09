import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { itemId } = useParams();
  return (
    <div>
      <h3>Item: {itemId.charAt(0).toUpperCase() + itemId.slice(1)}</h3>
      <p>This is a detailed view of the selected item.</p>
    </div>
  );
}

export default ItemDetail;

