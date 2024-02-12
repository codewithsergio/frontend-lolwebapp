import Link from "next/link";
import React from "react";

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
  const items: { [key: string]: { [key: string]: Item } } =
    await response.json();
  return (
    <>
      <h1>All League Items</h1>
      <ul>
        {Object.keys(items["data"]).map((currentItem) => (
          <li key={Math.random()}>
            <h1>{items["data"][currentItem].name}</h1>
            <h3>Description</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: items["data"][currentItem].description,
              }}
            ></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
