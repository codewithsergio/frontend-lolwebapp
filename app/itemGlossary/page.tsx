import Link from "next/link";
import React from "react";
import ToolTip from "../components/ToolTip";

interface Item {
  name: string;
  description: string;
  into: string[];
  isInMap: boolean;
  from: string[];
  gold: { [key: string]: number };
}

const ItemGlossaryPage = async () => {
  const URL = "http://localhost:8080/items";
  const response = await fetch(URL);
  const { data } = await response.json();
  return (
    <>
      <h1>All League Items</h1>
      <div className="itemsGrid">
        {Object.keys(data).map((currentItem) => {
          const { name, description, from, into } = data[currentItem];
          const filePath = `itemImages/${currentItem}.png`;
          return (
            <div className="imageAndDescriptionFaceout" key={Math.random()}>
              {currentItem &&
                <img className="itemImage" src={filePath} />}
                <ToolTip
                data={data}
                name={name}
                from={from}
                into={into}
                description={description}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemGlossaryPage;
