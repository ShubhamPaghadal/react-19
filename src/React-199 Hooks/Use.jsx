import React from "react";

function Use() {
  const fetchData = fetch("https://dummyjson.com/users").then((res) => {
    res.json();
  });
  const userResource = fetchData();

  console.log(fetchData);

  return (
    <>
      <Users />
    </>
  );
}

const Users = () => {
  return (
    <>
      <h1>Shubham</h1>
    </>
  );
};
export default Use;
