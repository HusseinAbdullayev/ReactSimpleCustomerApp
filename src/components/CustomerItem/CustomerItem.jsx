import styled from "styled-components";
import "./CustomerItem.css";

const DeleteButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: rgb(230, 34, 20);
  color: white;
  font-size: 20px;
  font-weight: 100;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover{
    opacity:0.9;
  } 
`;

const CustomerItem = ({ customer, handleDelete }) => {
  console.log(customer);

  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <DeleteButton className="delete-button" onClick={() => handleDelete(customer)}>
        -
      </DeleteButton>
    </li>
  );
};

export default CustomerItem;
