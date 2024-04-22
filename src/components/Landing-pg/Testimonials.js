import React from 'react';

function Testimonials() {
  return (
    <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-white dark:bg-gray-800 w-72 shadow-lg shadow-[#da45ff] mx-auto rounded-xl p-4">
      <p className="text-gray-600 dark:text-white">
        <span className="text-lg font-bold text-indigo-500">
          “
        </span>
        To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
        <span className="text-lg font-bold text-indigo-500">
          ”
        </span>
      </p>
      <div className="flex items-center mt-4">
        <a href="#" className="relative block">
          <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
        </a>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-indigo-500">
            Jean Miguel
          </span>
          <span className="flex items-center text-xs dark:text-gray-400">
            User of Tail-Kit
            <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" alt="rocket"/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
