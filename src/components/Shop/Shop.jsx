import React from 'react';
import { products } from '../../data';
import { FaSmile } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Shop = () => {
  return (
    <div className='container mx-auto px-5'>
      <h2>This is shop page</h2>


      {/* Display Products */}
      <div className="w-full mt-2 overflow-x-auto">
        <table className="table-auto text-left w-full">
          <thead className="bg-[#f7f7f7]">
            <tr>
              <th className="p-3 text-sm font-semibold text-left pl-10">
                Image
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Color
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Stock
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Price
              </th>
              <th className="p-3 text-sm font-semibold text-left">
               Total Available
              </th>
              <th className="p-3 text-sm font-semibold text-center">
                Buy
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return (
                <tr key={index} className="">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img width={100} src={product?.image} alt="img" />
                  </td>
                  <td className="p-3 text-sm font-[500] capitalize text-[#00A0C6] underline whitespace-nowrap">
                    {product.name}
                  </td>

                  <td className="p-3 text-sm font-[500] capitalize text-[#00A0C6] underline whitespace-nowrap">
                    {product.color}
                  </td>

                  <td className="p-3 text-sm text-[#32d28c] font-semibold whitespace-nowrap">
                    {product.availableQuantity > 0 ? (
                      <p className='flex gap-x-1 items-center'> <FaSmile className='text-green-500' /> In Stock</p>
                    ) : (
                      <p>Out Of Stock</p>
                    )}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ${product.price}.00
                  </td>
                  <td className=" pl-5 lg:pl-10 text-sm  text-gray-700 whitespace-nowrap">
                    {product.availableQuantity}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div>
                      <div className='flex justify-center items-center gap-x-2 '>
                        <span>
                          {product.availableQuantity > 0 ? (
                            <input type="number" className='w-12 p-1 text-center border border-[#9c9b9b] rounded-sm' />
                          ) : (
                            <input type="" disabled className='w-12 cursor-not-allowed  p-1 text-center bg-[#efebeb]' title='Out of Stock'/>
                          )}
                        </span>
                        <AiOutlineShoppingCart className='text-3xl w-16 py-1 rounded-sm text-[#f2efef] bg-[#383838]' />
                        {product.availableQuantity > 0 ? (
                          <input type="checkbox" name="" id="" className='cursor-pointer' />
                        ) : (
                          <input disabled type="checkbox" className='cursor-not-allowed' />
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;