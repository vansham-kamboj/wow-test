import React from 'react';

const CanadaComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://www.go.study/assets/canada/study-in-canada.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:hidden  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in Canada" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-40 text-purple-900 font-extrabold">WANT TO STUDY IN CANADA</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in Canada?</p>
          <p>
            Canada offers excellent education opportunities with a diverse and inclusive environment. Top-notch universities, innovative research facilities, and a high standard of living attract students from around the globe. Moreover, Canada's welcoming culture and emphasis on multiculturalism make it an enriching experience for international students.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we provide comprehensive support tailored to your needs. From initial consultation to visa processing, our expert counselors assist you at every step, ensuring a smooth transition to studying in Canada. We prioritize your academic and personal growth, offering guidance and resources to help you thrive in a new educational environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanadaComponent;
