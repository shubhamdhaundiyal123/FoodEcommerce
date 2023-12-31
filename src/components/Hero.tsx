const Hero = () => {
  return (
    <div className="container pt-8 ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero.jpg"
            alt="heroimage"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
            <p className="text-2xl hidden text-white sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl text-white sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-white text-xl pt-4 sm:pt-8 ">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.6
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex item-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
              Shop Now
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg  opacity-80"
            src="y1.jpg"
            alt="hero-image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl text-white sm:text-3xl font-bold">
              Best Yummy Pizzas
            </h2>
            <p className="text-white text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $15
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex item-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
              Shop Now
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg  opacity-80"
            src="y2.jpg"
            alt="hero-image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Best Yummy Pizzas
            </h2>
            <p className="text-white text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $15
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex item-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
