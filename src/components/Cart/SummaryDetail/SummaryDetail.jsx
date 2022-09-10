import React from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const SummaryDetail = ({ item }) => {
  console.log(item)
  return (
    <tr>
      <td>
        <div className='flex gap-x-5 items-center'>
          <button className='px-2 py-1 bg-red-500 text-white rounded-sm'>X</button>
          <img width={100} src={item.image} alt={item.name} />
          <span>{item.name}</span>
        </div>
      </td>
      <td className=''>${item.price}.00</td>
      <td>
        <div className='flex justify-around border rounded-2xl gap-x-2 px-3 py-1 w-28'>
          <button><AiOutlineMinus/></button>
          <input className='w-12 text-center' type="number" min='0' defaultValue={item.cartQuantity} />
          <button><AiOutlinePlus/></button>
        </div>
      </td>
      <td className='text-center'>$</td>
    </tr>
  );
};

export default SummaryDetail;