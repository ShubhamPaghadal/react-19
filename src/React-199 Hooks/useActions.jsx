import React, { useActionState } from "react";

function Useaction() {
  const handlesbmit = (previouseData, formdata) => {
    let name = formdata.get("name");
    let password = formdata.get("password");
    console.log(name, password);

    if (name && password) {
      return { massege: "Data is submited", name, password };
    } else {
      return { error: "Data is not submited", name, password };
    }
  };

  const [data, action, pending] = useActionState(handlesbmit, undefined);
  return (
    <>
      <form action={action}>
        <input type="text" placeholder="Enter name " name="name" />
        <br /> <br />
        <input type="password" placeholder="Enter name " name="password" />
        <br />
        <br />
        <button>Submit data</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.massege && <span style={{ color: "green" }}>{data?.massege}</span>}
      <p>name: {data?.name}</p>
      <p>password: {data?.password}</p>...
    </>
  );
}

export default Useaction;
