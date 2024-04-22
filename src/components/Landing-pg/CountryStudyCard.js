import React, { useEffect, useRef } from 'react';
import '../../App.css';

const CountryStudyCard = () => {
  const countries = [
    {
      name: 'USA',
      flag: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      locationImage: 'https://www.investopedia.com/thmb/8Mu9AzhkfoVrrLNoU-T2nnHxEhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/a_16-5bfc3876c9e77c002633f632.jpg',
      description: 'The United States is a diverse and vast country with a rich cultural heritage and excellent educational institutions.'
    },
    {
      name: 'UK',
      flag: 'https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg',
      locationImage: 'https://adm.dookinternational.com/dook/images/country/XYwKYrjh1656324286.jpg',
      description: 'The United Kingdom is renowned for its prestigious universities and historical landmarks, offering a unique study abroad experience.'
    },
    {
      name: 'Canada',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png',
      locationImage: 'https://i.natgeofe.com/k/e2ffc795-8b1f-4479-8c95-b6497e5ca4f2/canada-vancouver_square.jpg',
      description: 'Canada is known for its quality education system, stunning landscapes, and welcoming multicultural environment.'
    }
  ];

  // Ref for the cards container
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the item is visible
      }
    );

    const cards = cardsContainerRef.current.getElementsByClassName('card');
    if (cards.length) {
      Array.from(cards).forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-center pt-4 dots-pattern">
      <h1 className="text-4xl font-extrabold text-purple-900">Study Abroad Destinations</h1>
      <p className="text-lg text-gray-600 mb-8">Explore our top study abroad destinations</p>

      <style>
        {`
          .card {
            background-color: rgba(255, 255, 255,);
            box-shadow: 0 2px 20px #f7f0f7;
            border-radius: 8px;
            border:none;
            padding: 16px;
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: box-shadow 0.3s ease;
          }

          .card.animate {
            transform: scale(1.05);
            transition: transform 1.2s ease-in-out;
          }

          .card:hover {
            transition: 0.2s;
            scale: 1.01;
          }

          .location-image-container {
            width: 100%; /* Set width */
            height: 200px; /* Set height */
            overflow: hidden; /* Crop overflow */
          }

          .location-image {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Cover the container */
          }
        `}
      </style>

      <div ref={cardsContainerRef} className="flex mx-20 max-sm:mx-2 flex-col lg:flex-row ">
        {/* Country Cards */}
        {countries.map((country, index) => (
          <div key={index} className="lg:w-1/3 p-4 h-full ">
            <div className="card">
              <div className="location-image-container">
                <img src={country.locationImage} alt={`${country.name} location`} className="location-image rounded-lg" />
              </div>
              <img src={country.flag} alt={`${country.name} flag`} className="w-20 h-20 rounded-full mt-2 mb-2 self-center" />
              <div>
                <h2 className="text-xl font-bold mb-2">{country.name}</h2>
                <p className='text-gray-600'>{country.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryStudyCard;
