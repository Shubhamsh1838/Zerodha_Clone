import React, {useState, useEffect} from "react";
import axios from "axios";


const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res)=>{
      console.log(res.data);
      setAllOrder(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({allOrder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Cur. val</th>
            <th>Mode</th>
          </tr>

          {allOrder.map((stock, index)=>{
            const curValue = stock.price * stock.qty;
            return (
               <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;