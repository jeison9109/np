import React from "react";

const fetchData = () =>
  new Promise((r) => setTimeout(() => r(Date.now()), 100));

export const PruebaYei = () => {
  const [result, setResult] = React.useState();
  const data = fetchData().then((value) => setResult(value));

  return (
    <div>
      {result === data.toString() ? <div>Hola</div> : <div>Good bye</div>}
    </div>
  );
};
