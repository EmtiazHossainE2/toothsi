import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { removeFromDb } from '../../../utilities/fakedb';


const SummaryDetail = ({ item, subtotal }) => {
  // console.log(item)
  const [updatedQuantity, setUpdatedQuantity] = useState(item.cartQuantity)
  // console.log(updatedQuantity);
  let price = updatedQuantity * item.price
  

  const plus = () => {
    if (updatedQuantity >= item.availableQuantity) {
      setUpdatedQuantity(item.availableQuantity)
    }
    else {
      setUpdatedQuantity(parseInt(updatedQuantity + 1))
    }
  }
  const minus = () => {
    if (updatedQuantity <= 1) {
      setUpdatedQuantity(updatedQuantity)
    }
    else {
      setUpdatedQuantity(parseInt(updatedQuantity - 1))
    }
  }

  const handleRemove = () => {
    removeFromDb(item.id)
  }


  return (
    <tr>
      <td>
        <div className='flex gap-x-5 items-center'>
          <button onClick={handleRemove} className='px-2 py-1 bg-red-500 text-white rounded-sm'>X</button>
          <img width={100} src={item.image} alt={item.name} />
          <span>{item.name}</span>
        </div>
      </td>
      <td>${item.price}.00</td>
      <td>
        <div className='flex justify-around border rounded-2xl gap-x-2 px-2 py-1 w-28'>
          <button onClick={minus} ><AiOutlineMinus /></button>
          <span>{updatedQuantity}</span>
          <button onClick={plus} ><AiOutlinePlus /></button>
        </div>
      </td>
      <td className='text-center'>${price}</td>
    </tr>
  );
};

export default SummaryDetail;