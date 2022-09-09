import React, { useEffect, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { productList } from '../../data';
import { BsArrow90DegLeft } from 'react-icons/bs';

const Shop = ({ products, setProducts }) => {
  const [searchInput, setSerachInput] = useState('')
  const [selectCategory , setSelectCategory] = useState('')
  const [selectSize , setSelectSize] = useState('')
  // console.log(selectCategory);

  // Filtering 
  const filtering = () => {
    let updatedList = productList
    setProducts(updatedList)

    // Category 
    if(selectSize){
      updatedList = updatedList.filter((item) => item.size.toLowerCase().search(selectSize.toLowerCase().trim()) !== -1);
      setProducts(updatedList)
    }

    // Size 
    if(selectCategory){
      updatedList = updatedList.filter((item) => item.category.toLowerCase().search(selectCategory.toLowerCase().trim()) !== -1);
      setProducts(updatedList)
    }

    // Search 
    if (searchInput) {
      updatedList = updatedList.filter((product) => product.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1);
      setProducts(updatedList);
    }


  }

  useEffect(() => {
    filtering();
  }, [selectCategory,selectSize,searchInput]);

  return (
    <div className='container mx-auto px-5 my-8'>

      {/* Top Bar  */}
      <div className='flex flex-col lg:flex-row gap-y-3 justify-between '>

        {/* Top Left  */}
        <div className='flex gap-x-4 order-2 lg:order-1'>
          <select className='border border-[#706f6f] rounded-md cursor-pointer' 
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option >Category</option>
            <option >Hoodie</option>
            <option >Pant</option>
            <option >Shirt</option>
          </select>
          <select className='border border-[#706f6f] rounded-md px-2 cursor-pointer'
          value={selectSize}
          onChange={(e) => setSelectSize(e.target.value)}
          >
            <option>Size</option>
            <option>lg</option>
            <option>xl</option>
            <option>xxl</option>
          </select>
          <span className='flex gap-1 text-[#00A0C6] font-semibold cursor-pointer items-center'> <BsArrow90DegLeft /> Reset</span>
        </div>

        {/* Top Right */}
        <div className='flex items-center gap-x-2 order-1 lg:order-2'>
          <span className='hidden lg:block'>Search:</span>
          <input type="text" placeholder='woo ninja' className='pl-2 border border-[#706f6f] rounded-md' value={searchInput} onChange={(e) => setSerachInput(e.target.value)} />
          <button className='px-4 py-1 bg-[#00A0C6] text-white'>Add To Cart</button>
        </div>

      </div>


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
            {products?.length > 0 ? (
              <>
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
                                <input type="" disabled className='w-12 cursor-not-allowed  p-1 text-center bg-[#efebeb]' title='Out of Stock' />
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
              </>
            ) : (
              <h2 className='text-2xl  font-semibold text-[#9c6c6c] py-5'>No Product Found</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;