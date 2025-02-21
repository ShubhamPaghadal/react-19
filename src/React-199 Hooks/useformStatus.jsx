import React from "react";
import { useFormStatus } from "react-dom";

function UseformStatus() {
  const handlesubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Data is submitted");
  };
  const CustomerForm = () => {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <>
        <input type="text" />
        <br />
        <br />
        <input type="password" />
        <br />
        <button disabled={pending}>{pending ? "Submiting" : "Submit"}</button>
      </>
    );
  };
  return (
    <>
      <form action={handlesubmit}>
        <CustomerForm />
      </form>
    </>
  );
}
export default UseformStatus;
