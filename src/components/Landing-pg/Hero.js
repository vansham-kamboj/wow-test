import React, { useState, useEffect } from 'react';
import HeroImg from "../../images/hero.png";

const NumberCounter = ({ targetStudents, targetInstitutes }) => {
  const [countStudents, setCountStudents] = useState(0);
  const [countInstitutes, setCountInstitutes] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const interval = 50; // Interval in milliseconds
    const steps = duration / interval;
    const incrementStudents = targetStudents / steps;
    const incrementInstitutes = targetInstitutes / steps;

    let counterStudents = 0;
    let counterInstitutes = 0;

    const timer = setInterval(() => {
      counterStudents += incrementStudents;
      setCountStudents(Math.min(Math.ceil(counterStudents), targetStudents));

      counterInstitutes += incrementInstitutes;
      setCountInstitutes(Math.min(Math.ceil(counterInstitutes), targetInstitutes));

      if (counterStudents >= targetStudents && counterInstitutes >= targetInstitutes) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetStudents, targetInstitutes]);

  return (


    <div className="flex items-center">
      <div className="mr-8">
        <span className="text-3xl font-bold text-white">{countStudents}+</span><br></br>
        <span className="text-white font-thin max-sm:font-light text-xl"> Students</span>
      </div>
      <div>
        <span className="text-3xl font-bold text-white">{countInstitutes}+</span><br></br>
        <span className="text-white font-thin max-sm:font-light text-xl"> Partner Universities</span><br></br>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex overflow-clip bg-purple-900 max-sm:h-1 min-h-screen px-16 max-sm:px-1">
      <div className="relative w-full">
        <div className="absolute top-20 -left-[40rem] max-sm:size-40 size-[70rem] bg-yellow-300 rounded-full filter blur-xl opacity-10"></div>

        <div className="absolute -top-20 -right-[12rem] max-sm:hidden size-[50rem] bg-white rounded-full filter opacity-15"></div>


        <div class="m-2 relative space-y-4">
        <div className="container mt-20 z-10 mx-auto px-4 md:px-8 py-12 md:py-24 max-sm:h-10 flex flex-col md:flex-row items-center justify-between">
          {/* Content on the left */}
          <div className="w-full md:w-1/2 max-md:w-">
            <div
              className="delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
              data-taos-offset="400"
            >
              <h1 className="animate-fade-up text-2xl md:text-4xl max-sm:text-5xl max-sm:font-extrabold lg:text-5xl font-bold text-white leading-tight ">
                WOW GLOBAL <br></br> STUDIES
              </h1>
              <p className='text-white animate-fade animate-once'>Visa Consultancy | Study Abroad</p>
            </div>

            <p className="text-base max-md:text-xl lg:text-xl text-gray-300 animate-fade animate-once">
              Embark on an educational journey and expand your horizons with GlobalEd. We provide personalized study abroad programs, connecting students with top universities around the globe.
            </p>
            <div className="text-4xl font-bold text-blue-500">
              <NumberCounter targetStudents={100} targetInstitutes={10} />
            </div>
            <div className="px-1 py-10">
      <div className="grid justify-start">
        <div className="relative group">
          <div className="absolute inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-7 py-3 bg-white rounded-full leading-none flex items-center divide-x divide-gray-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
          </div>

          {/* Image on the right */}
          <div className="max-sm:hidden mr-20 z-20 w-full md:w-1/3">
            <img src={HeroImg} alt="Hero Image" className="w-full h-auto " />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
