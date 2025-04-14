import React, { useState } from "react";
import "./CostumerForm.css";
const CostumerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0) {
      console.log("olmaz");
      setIsValid(true);
      return;
    }
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    if (nameValue.trim().length > 0) {
      setIsValid(false);
    }
    setCustomerName(nameValue);
  };

  return (
    <div>
      <form className="customer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`customer-input ${isValid ? "invalid" : ""}`}
          placeholder="Add a new customer"
          onChange={nameInputChangeHandler}
          value={customerName}
          // style={{ backgroundColor: isValid ? "red" : "" }}
        />

        <button className="customer-button">+</button>
      </form>
    </div>
  );
};

export default CostumerForm;
