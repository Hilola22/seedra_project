import { memo, useState } from "react";
import icon1 from "@/shared/assets/icon1.svg";
import vegIcon from "@/shared/assets/icon2.svg";
import herbIcon from "@/shared/assets/icon3.svg";
import flowerIcon from "@/shared/assets/icon4.svg";
import indoorIcon from "@/shared/assets/icon5.svg";
import outdoorIcon from "@/shared/assets/icon6.svg";
import toolsIcon from "@/shared/assets/icon7.svg";

export const Categories = memo(() => {
  const categories = [
    { name: "All", icon: icon1 },
    { name: "Vegetables", icon: vegIcon },
    { name: "Herbs", icon: herbIcon },
    { name: "Flowers", icon: flowerIcon },
    { name: "Indoor Plants", icon: indoorIcon },
    { name: "Outdoor Plants", icon: outdoorIcon },
    { name: "Tools", icon: toolsIcon },
  ];

  const [active, setActive] = useState("All");

  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center gap-2 px-7 py-3 rounded-[8px] border-2 text-[15px] transition
              ${
                active === cat.name
                  ? "bg-green-600 text-white border-green-700 shadow-md"
                  : "border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-500"
              }`}
          >
            <img src={cat.icon} alt={cat.name} className="w-5 h-5" />
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
});
