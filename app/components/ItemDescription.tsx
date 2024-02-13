"use client";
import React from "react";

interface ItemDescriptionProps {
  description: string;
}
const ItemDescription: React.FC<ItemDescriptionProps> = ({ description }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
  );
};

export default ItemDescription;
