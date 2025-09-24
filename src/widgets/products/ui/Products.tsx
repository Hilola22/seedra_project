import { memo } from "react";
import product from "@/shared/assets/product.png";
import { IoCartOutline } from "react-icons/io5";
import { Categories } from "@/entites";
// import { FaHeart } from "react-icons/fa";
{/* <button
  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                         rounded-full bg-white border border-gray-200 shadow hover:shadow-md transition"
>
  <FaHeart className="text-orange-500 text-[20px]" />
</button>; */}

export const Products = memo(() => {
  const cards = Array(6).fill({
    img: product,
    rating: "⭐⭐⭐⭐⭐ (123)",
    title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    price: "$12.56",
  });

  return (
    <section className="mt-[80px] mb-10">
      <div className="container mx-auto flex justify-between items-center mb-10">
        <h1 className="text-[28px] lg:text-[36px] font-semibold">
          Our products.
        </h1>
        <button className="text-[12px] lg:text-[16px] text-green-600 font-medium py-2 px-7 lg:py-[11px] lg:px-[33px] border-1 border-gray-300 rounded-lg hover:border-green-600 transition">
          View all (12)
        </button>
      </div>

      <Categories />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {cards.map((item, i) => (
          <div
            key={i}
            className="w-full border-2 border-gray-200 rounded-[12px] p-7 hover:shadow-md transition"
          >
            
            <img
              className="w-[294px] h-[294px] object-cover mx-auto rounded-[12px] mb-7"
              src={item.img}
              alt="product"
            />
            <p className="mb-2 text-left text-yellow-500">{item.rating}</p>
            <p className="mb-4 text-gray-800 leading-[22px]">{item.title}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[28px]">{item.price}</p>
              <button className="p-2 flex items-center justify-center border border-gray-300 rounded-[8px] hover:border-green-700">
                <IoCartOutline size={23} className=" text-green-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
