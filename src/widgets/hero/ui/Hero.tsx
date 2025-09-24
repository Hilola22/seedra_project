import { memo } from "react";
import HeroImg from "@/shared/assets/hero.png";
import miniHero from "@/shared/assets/mini-hero.png";
import fire from "@/shared/assets/fire.svg";

export const Hero = memo(() => {
  return (
    <>
      <section className="pt-10">
        <div className="container mx-auto relative">
          <img
            className="w-full rounded-[16px] object-cover"
            src={HeroImg}
            alt="hero"
          />

          <div className="absolute top-[10%] left-[8%] max-w-[650px]">
            <h1 className="font-semibold text-[48px] tracking-[-0.05em] leading-[54px] mb-5 text-gray-900">
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h1>
            <p className="max-w-[530px] text-gray-700 mb-6">
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our
              guarantee.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <img className="size-[46px]" src={fire} alt="fire icon" />
              <p className="font-semibold text-[42px] text-green-700">$12.56</p>
              <p className="font-semibold text-[22px] text-[#70737C] line-through">
                $15.56
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-green-700 text-white px-7 py-3 rounded-[8px] hover:bg-green-800 transition">
                Add to cart
              </button>
              <button className="border border-green-700 text-green-700 px-7 py-3 rounded-[8px] hover:bg-green-50 transition">
                Discover
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto w-full">
          <div className="relative w-full mx-auto">
            <img
              className="w-full rounded-[16px] object-cover"
              src={miniHero}
              alt="mini hero"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 px-4">
              <h2 className="font-semibold text-[24px] text-gray-900">
                We sell seeds
              </h2>
              <p className="text-gray-600 max-w-[500px]">
                that always sprout and gardening supplies which never break
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
