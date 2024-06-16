import React from "react";
import sample from "../../assets/hero.png";

const IntroDetails = () => {
  return (
    <>
      <section className="bg-light_grey shadow-sm w-full rounded-lg px-3 py-2">
        <div className="lg:flex items-center justify-between ">
          <div className="lg:flex items-center lg:gap-5">
            <img
              src={sample}
              alt="Menu Image"
              className="h-60 w-60 object-cover"
            />
            <div className="space-y-3 pl-3 lg:max-w-2xl">
              <p className="font-semibold text-blue text-4xl">
                {"ABC Hospital"}
              </p>
              <p className="text-2xl">Greater Accra Region, Accra</p>
              <div className="flex space-x-3">
                <p className="text-xl">{"😃 Excellent"}</p>
                <p className="pt-1 text-blue">(123 reviews)</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex lg:w-[400px]">
            <div className="space-y-5 justify-center ml-5 flex items-center lg:mt-0 mt-5">
              {/* {singlePokemon.stats.map((pokestats) => ( */}
              <div className="flex h-3 flex-row items-center">
                <div className="w-20">
                  <p className="w-full text-xs">{"Excellent 😃"}</p>
                </div>
                <div className="w-[200px] rounded-xl bg-zinc-400 h-2 mx-2">
                  <div
                    className="h-2 rounded-xl w-[20%] bg-blue"
                    // style={{
                    //   width: `${pokestats.base_stat}%`,
                    //   backgroundColor: theme,
                    // }}
                  ></div>
                </div>
                <div>
                  <p className="ml-2 text-xs">12 reviews</p>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroDetails;
