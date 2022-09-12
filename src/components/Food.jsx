import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
   const [food, setFood] = useState(data);

// filter method

    const filterType = (category) => {
        setFood(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

// filter price   

    const filterPrice = (price) => {
       setFood(
          data.filter((item) => {
             return item.price === price;
          })
       );
    };    

    
   return (
      <div className="max-w-[1640px] mx-auto px-4 py-12">
         <h1 className="text-orange-500 font-bold text-4xl text-center">
            Checkout Our Amazing Menu
         </h1>

         {/* filter row */}
         <div className="flex flex-col lg:flex-row justify-between">
            {/* filter type */}
            <div>
               <p className="font-bold text-gray-700">
                  Browse through our menu
               </p>
               <div className="flex justify-between flex-wrap">
                  <button onClick={()=> setFood(data)} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     All
                  </button>
                  <button onClick={()=> filterType("burger")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     Burger
                  </button>
                  <button onClick={()=> filterType("pizza")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     Pizza
                  </button>
                  <button onClick={()=> filterType("salad")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     Salads
                  </button>
                  <button onClick={()=> filterType("chicken")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     Chicken
                  </button>
               </div>
            </div>
            {/* filter price  */}
            <div>
               <p className="font-bold text-gray-700">Go through our price</p>
               <div className="flex justify-between max-w-[390px] w-full">
                  <button onClick={() => filterPrice("$")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     $
                  </button>
                  <button onClick={() => filterPrice("$$")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     $$
                  </button>
                  <button onClick={() => filterPrice("$$$")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     $$$
                  </button>
                  <button onClick={() => filterPrice("$$$$")} className="m-1 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white ">
                     $$$$
                  </button>
               </div>
            </div>
         </div>

         {/* display food */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {" "}
            {food.map((item, index) => {
               return (
                  <div
                     key={item.id}
                     className="border shadow-lg rounded-lg hover:scale-105 duration-300"
                  >
                     <img
                        src={item.image}
                        alt={item.name}
                        className="img-responsive w-full h-[200px] object-cover rounded-t-lg "
                     />
                     <div className="flex justify-between px-2 py-4">
                        <p className="font-bold">{item.name}</p>
                        <p>
                           <span className="bg-orange-500 text-white p-1 rounded-full">
                              {item.price}
                           </span>
                        </p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Food;
