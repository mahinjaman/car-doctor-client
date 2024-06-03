import React from 'react';

const HeroSlider = () => {
    return (
      <div className="carousel w-full lg:h-[600px] rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/NSRfGKf/5.jpg" className="w-full" />

          {/* slider content */}
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent text-white flex items-center">
            <div className="md:w-2/3 lg:w-2/5 space-y-3 lg:space-y-8 ml-10 lg:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col w-1/2 md:w-full md:flex-row  gap-5">
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border border-orange-500 bg-orange-500 rounded-md">
                  Discover More
                </button>
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* Slider Control Button */}

          <div className="absolute flex bottom-7 gap-5 right-10">
            <a
              href="#slide4"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/LdSWWRY/3.jpg" className="w-full" />

          {/* slider content */}
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent text-white flex items-center">
            <div className="md:w-2/3 lg:w-2/5 space-y-3 lg:space-y-8 ml-10 lg:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col w-1/2 md:w-full md:flex-row  gap-5">
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border border-orange-500 bg-orange-500 rounded-md">
                  Discover More
                </button>
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border rounded-md">
                  
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* Slider Control Button */}

          <div className="absolute flex bottom-7 gap-5 right-10">
            <a
              href="#slide1"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/BjgHshn/2.jpg" className="w-full" />

          {/* slider content */}
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent text-white flex items-center">
            <div className="md:w-2/3 lg:w-2/5 space-y-3 lg:space-y-8 ml-10 lg:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col w-1/2 md:w-full md:flex-row  gap-5">
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border border-orange-500 bg-orange-500 rounded-md">
                  Discover More
                </button>
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border rounded-md">
                  
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* Slider Control Button */}

          <div className="absolute flex bottom-7 gap-5 right-10">
            <a
              href="#slide2"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white "
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ryS5DsN/1.jpg" className="w-full" />

          {/* slider content */}
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent text-white flex items-center">
            <div className="md:w-2/3 lg:w-2/5 space-y-3 lg:space-y-8 ml-10 lg:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col w-1/2 md:w-full md:flex-row  gap-5">
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border border-orange-500 bg-orange-500 rounded-md">
                  Discover More
                </button>
                <button className="py-2 px-5 text-lg font-semibold tracking-wide border rounded-md">
                  
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* Slider Control Button */}

          <div className="absolute flex bottom-7 gap-5 right-10">
            <a
              href="#slide3"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white "
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle border-none duration-300 lg:text-3xl hover:bg-orange-500 hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default HeroSlider;