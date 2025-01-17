import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import "./../../css/collection-preview.css";

const CollectionPreview = ({ title, items }) => (
  <div className="Collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
