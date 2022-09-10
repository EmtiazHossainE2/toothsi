import React from 'react';
import SummaryDetail from './SummaryDetail/SummaryDetail';

const Cart = ({ cartItems, setCartItems }) => {
  // console.log(cartItems)

  const items = Object.values(cartItems)
  // console.log(items)


  return (
    <div className='my-12 container mx-auto px-5 lg:px-12'>
      <h2 className='text-center py-5 text-2xl font-bold'>The checkout summary page </h2>
      <div>
        <div className="flex gap-x-5">
          <div className="basis-3/4">
            {/* Checkout Product Summary Products */}
            <div className="w-full mt-2 overflow-x-auto">
              <table className="table-auto text-left w-full">
                <thead className="bg-[#f7f7f7]">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-left pl-12 ">
                      Product
                    </th>
                    <th className="p-3 text-sm font-semibold text-left ">
                      Price
                    </th>
                    <th className="p-3 text-sm font-semibold text-left pl-5">
                      Quantity
                    </th>
                    <th className="p-3 text-sm font-semibold text-center">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items?.length > 0 ? (
                    <>
                      {items.map((item, index) => <SummaryDetail
                        key={index}
                        item={item}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                      />)}
                    </>
                  ) : (
                    <h2 className='text-2xl  font-semibold text-[#9c6c6c] py-5'>No Product Found</h2>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="basis-1/4">
            <div className='border shadow-md rounded-md px-3'>
              <h2 className='text-lg md:text-2xl py-5 font-[500]'>Cart Totals </h2>
              <div className='flex justify-between pb-1'>
                <span className='font-semibold'>Subtotal</span>
                <span>$100</span>
              </div>
              <hr />
              <div className='flex justify-between py-5 text-lg font-bold'>
                <span>Total</span>
                <span>$100</span>
              </div>
              <button className='uppercase text-white bg-[#1246AF] rounded-lg text-center mb-2 px-4 py-2 container '>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;