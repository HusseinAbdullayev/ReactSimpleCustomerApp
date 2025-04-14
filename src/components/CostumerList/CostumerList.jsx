
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CostumerList.css";


const CostumerList = ({customers,setCustomers}) => {


  //! delete customer

  const handleDelete =(item) =>{
    setCustomers(customers.filter((customer)=> customer.id !== item.id))
    
  }
  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem customer={customer} key={customer.id} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default CostumerList;
