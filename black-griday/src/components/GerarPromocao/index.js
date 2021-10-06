import { useState } from "react";

const GerarPromocao = ({ promoList, setPromoList, useProduct }) => {
  const randomId = Math.floor(Math.random() * (1 - 7)) + 7;
  const randomPercent = Math.floor(Math.random() * (40 - 91)) + 91;
  const selected = useProduct.filter((e) => e.id === randomId)[0];

  const { id, name, price } = selected;
  const valueDiscount = (price / 100) * randomPercent;

  const obj = {
    id: id,
    name: name,
    price: price,
    percentDiscountNumber: randomPercent,
    valueDiscount: valueDiscount.toFixed(2),
    finalValue: (price - valueDiscount).toFixed(2),
  };
  const handleClick = () => {
    setPromoList([...promoList, obj]);
  };
  return <button onClick={handleClick}>GERAR PROMOÇÃO</button>;
};
export default GerarPromocao;
/* 

import { useState } from "react";

const GerarPromocao = ({ promoList, setPromoList, useProduct }) => {
  const [randomId, setRandomId] = useState(1);
  const [randomPercent, setRandomPercent] = useState(0);

  const [selected, setSelected] = useState({});
  const { id, name, price } = selected;
  const valueDiscount = (price / 100) * randomPercent;
  const obj = {
    id: id,
    name: name,
    price: price,
    percentDiscountNumber: randomPercent,
    valueDiscount: valueDiscount.toFixed(2),
    finalValue: (price - valueDiscount).toFixed(2),
  };
  const handleClick = () => {
    setRandomId(Math.floor(Math.random() * (1 - 7)) + 7);
    setRandomPercent(Math.floor(Math.random() * (40 - 91)) + 91);
    setSelected(...useProduct.filter((e) => e.id === randomId));
    setPromoList([...promoList, obj]);
  };
  return <button onClick={handleClick}>GERAR PROMOÇÃO</button>;
};

export default GerarPromocao; */
