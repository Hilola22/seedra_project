import girl1 from "@/shared/assets/about_girl.jpg";
import profile from "@/shared/assets/aboutprofile.png";
import { memo } from "react";

export const About = memo(() => {
  return (
    <main className="w-full">
      <section className="container mx-auto mt-6 px-4">
        <div
          className="
      relative rounded-[16px] overflow-hidden
      flex items-center justify-center text-center px-4
      min-h-[220px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[250px]
      bg-[#E4F4E8]   
      md:bg-[url('/src/shared/assets/abouthero.png')] 
      md:bg-center md:bg-cover md:bg-no-repeat
    "
        >
          <div className="relative z-10 max-w-[600px] mx-auto">
            <h2
              className="
        text-[20px] sm:text-[28px] md:text-[44px] lg:text-[48px]
        font-semibold tracking-[-0.05em] text-gray-900 mb-3
      "
            >
              Who we are and what we do
            </h2>
            <p
              className="
        text-gray-700 max-w-[520px] mx-auto
        text-[12px] sm:text-sm md:text-base lg:text-lg
        leading-relaxed
      "
            >
              Here you can find a lot of interesting and useful information that
              you need in gardening and creating a beautiful garden
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-16 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:max-w-[500px] w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Seedra helps to grow fast and efficient
            </h3>
            <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>
            <ul className="list-none text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
              <li>
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.
              </li>
              <li>
                Your easy growing experience is our guarantee. Spinach common
                culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
                risotto, and more.
              </li>
              <li>
                Proudly sourced in the USA - our garden seeds are grown,
                harvested, and packaged in the USA. We support local farmers and
                are happy to produce this American-made product.
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-center">
            <img
              src={profile}
              alt="girl with tomatoes"
              className="
                w-full max-w-[480px] md:max-w-[500px]
                h-[320px] md:h-[420px] lg:h-[500px]
                rounded-[16px] object-cover
              "
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 mb-24 px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:max-w-[500px] w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our story
            </h3>
            <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>
            <ul className="list-none text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
              <li>
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.
              </li>
              <li>
                Your easy growing experience is our guarantee. Spinach common
                culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
                risotto, and more.
              </li>
              <li>
                Proudly sourced in the USA - our garden seeds are grown,
                harvested, and packaged in the USA. We support local farmers and
                are happy to produce this American-made product.
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-center">
            <img
              src={girl1}
              alt="girl holding plants"
              className="
                w-full max-w-[620px]
                h-[380px] md:h-[460px] lg:h-[500px]
                rounded-[16px] object-cover
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
});
