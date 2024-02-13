import Link from "next/link";
import React from "react";
import ItemDescription from "../components/ItemDescription";

interface Item {
  name: string;
  description: string;
  into: string[];
  isInMap: boolean;
  from: string[];
  gold: { [key: string]: number };
}

const UsersPage = async () => {
  const URL = "http://localhost:8080/items";
  const response = await fetch(URL);
  const { data } = await response.json();
  return (
    <>
      <h1>All League Items</h1>
      <ul>
        {Object.keys(data).map((currentItem) => {
          const { name, description, from, into } = data[currentItem];
          return (
            <li key={Math.random()}>
              <h1>{name}</h1>
              <h3>Description</h3>
              <ItemDescription description={description} />
              {from && <h3>Builds From</h3>}
              {from &&
                from.map((fromItem: string, index: number) => (
                  <div key={index}>
                    {data[fromItem] && data[fromItem]["name"]}
                  </div>
                ))}
              {into && <h3>Builds Into</h3>}
              {into &&
                into.map((intoItem: string, index: number) => (
                  <div key={index}>
                    {data[intoItem] && data[intoItem]["name"]}
                  </div>
                ))}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersPage;
