import React from "react";

const HeadlineCards = () => {
   return (
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
         {/* card */}
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
               <p className="font-bold text-2xl px-2 pt-4">Day in Day out</p>
               <p className="px-2">Through out the day</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
                  Order Now
               </button>
            </div>
            <img
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/1437810/pexels-photo-1437810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
            />
         </div>

         {/* 2nd card */}

         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
               <p className="font-bold text-2xl px-2 pt-4">Chef Az</p>
               <p className="px-2">Cooking the best</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
                  Order Now
               </button>
            </div>
            <img
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
            />
         </div>

         {/* 3rd card */}

         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
               <p className="font-bold text-2xl px-2 pt-4">Treat Yourself</p>
               <p className="px-2">So much pleasure</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
                  Order Now
               </button>
            </div>
            <img
               className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
               src="https://images.pexels.com/photos/1878344/pexels-photo-1878344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt=""
            />
         </div>
      </div>
   );
};

export default HeadlineCards;
