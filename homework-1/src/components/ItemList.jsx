import React from "react";

const items = ["Фанта", "Кола", "Пепси", "Меринда"];

const ItemList = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
