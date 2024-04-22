import React from 'react';

const UsaComponent = () => {
  return (
    <div className="flex px-80 pt-40 flex-row">
      <img src="https://www.go.study/assets/usa/study-in-usa.jpg" className="absolute top-40 left-20 w-72 h-72 rounded-lg mix-blend-multiply filter opacity-70" alt="Study in USA" />
      {/* Left Column */}
      <div className="relative">
        <div className="w-1/2 p-4">
          <h2 className="text-4xl text-purple-900 font-extrabold">WANT TO STUDY IN USA</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-3/4 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in the USA?</p>
          <p>
            The USA offers world-class education with diverse opportunities for personal and professional growth. Renowned universities, cutting-edge research facilities, and a vibrant academic environment make it an ideal destination for international students.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we provide personalized assistance and guidance throughout the application process. Our experienced counselors ensure smooth transition and support services, helping you make the most of your study experience in the USA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsaComponent;
