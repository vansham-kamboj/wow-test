import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const LoanRedirectCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="w-full text-center isometric py-4">
        <h1 className="text-4xl font-bold text-purple-900">Navigate Your Dreams - Visa to Victory, Loan to Launch.</h1>
      </div>
      <div ref={ref} className="flex flex-col md:flex-row max-sm:px-4 py-10 px-44 items-center bg-white rounded-lg overflow-hidden">
        {/* Added heading */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Use responsive object-fit utilities */}
          <img className="object-cover w-full h-48 md:h-auto" src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/15172154/SBI-Education-Loan.jpg" alt="Visa Consultancy" style={{ width: "400px"}} />
        </motion.div>
        <motion.div
          className="md:w-1/2 p-4"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Worry About Study Loan?</h2>
          <p className="mt-2 text-gray-600">We've partnered with leading loan agencies to provide you with the best options for financing your education abroad.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700" onClick={() => window.location.href = 'https://vrloansolution.in'}>
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanRedirectCard;
