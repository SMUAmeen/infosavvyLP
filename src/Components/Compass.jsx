import React from "react";
import stat1 from "../assets/stat1.svg";
import stat2 from "../assets/stat2.svg"
import stat3 from "../assets/stat3.svg"
import { PiNumberCircleOneDuotone } from "react-icons/pi";

const Compass = () => {
  return (
    <div className="p-10 font-outfit">

      <div className="max-w-[90rem] mx-auto flex flex-col gap-y-8">

        <h1 className="six-title tracking-tighter text-center text-slate-700 dark:text-slate-100 max-w-[70rem] mx-auto">
          Here's how InfoSavvy <span className="main-dark-gradient dark:main-gradient">simplifies access to resources</span> at your university
        </h1>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 max-w-[75rem] mx-auto grid md:grid-cols-2 gap-x-10 mt-10 relative transition-colors duration-300">
          <h1 className="absolute eight-title text-slate-800 dark:text-slate-300 z-10 -top-8 -right-4 font-bold">
            1
          </h1>

          <img src={stat1} alt="" className="dark:brightness-90" />
          
          <div className="flex flex-col gap-y-2 justify-center">
            <h2 className="six-title tracking-tight font-medium relative z-20 text-black dark:text-white">
              Contact <br />
              <span className="main-dark-gradient dark:main-gradient">Our Team.</span>
            </h2>
            <h4 className="one-title text-slate-700 dark:text-slate-300">
              Connect with us via email or through our website. Let us know your
              university's needs and goals, and we'll set up an introductory call
              to discuss how InfoSavvy can transform your data-driven initiatives.
            </h4>
          </div>
        </div>


        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 max-w-[75rem] mx-auto grid md:grid-cols-2 gap-x-10 mt-20 relative transition-colors duration-300">
  <h1 className="absolute eight-title text-slate-800 dark:text-slate-300 z-10 -top-12 -right-6 font-bold">
    2
  </h1>

  <div className="flex flex-col gap-y-2 justify-center">
    <h2 className="six-title tracking-tight font-medium relative z-20 text-black dark:text-white">
      Schedule <br />
      <span className="main-dark-gradient dark:main-gradient">A Demo.</span>
    </h2>
    <h4 className="one-title text-slate-700 dark:text-slate-300">
      Experience InfoSavvy firsthand! Schedule a personalized demo where we'll showcase 
      how our product can streamline your university's process, empower decision-making, 
      and enhance data utilization for faculty and students.
    </h4>
  </div>

  <img src={stat2} alt="" className="dark:brightness-90" />
</div>

<div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 max-w-[75rem] mx-auto grid md:grid-cols-2 gap-x-10 mt-20 relative transition-colors duration-300">
  <h1 className="absolute eight-title text-slate-800 dark:text-slate-300 z-10 -top-12 -right-6 font-bold">
    3
  </h1>

  <img src={stat3} alt="" className="p-4 dark:brightness-90" />
  
  <div className="flex flex-col gap-y-2 justify-center">
    <h2 className="six-title tracking-tight font-medium relative z-20 text-black dark:text-white">
      Launch <br />
      <span className="main-dark-gradient dark:main-gradient">Our Solution.</span>
    </h2>
    <h4 className="one-title text-slate-700 dark:text-slate-300">
      Partner with us to tailor InfoSavvy for your institution. We'll 
      guide you through the seamless implementation process, ensuring your 
      university maximizes the benefits of our platform. Let's revolutionize 
      your approach to data together.
    </h4>
  </div>
</div>


      </div>
    </div>
  );
};

export default Compass;
