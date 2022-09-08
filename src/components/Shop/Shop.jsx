import React from 'react';
import { products } from '../../data';

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
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.name}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.color}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.availableQuantity > 0 ? (
                      <p>In Stock</p>
                    ) : (
                      <p>Out Of Stock</p>
                    )}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.price}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.availableQuantity}
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