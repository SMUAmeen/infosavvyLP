import React from "react";
import ui_hero from "../assets/infosavvyui.svg";
import { FaRobot } from "react-icons/fa";
import logo from "../assets/infosavvylogo2.png";
import { DarkModeToggle } from "./DarkModeToggle";

const Hero = () => {
  return (
    <div className="font-outfit flex flex-col items-center relative mx-4 pt-4">
      {/* Absolute Gradient */}
      <div className="h-[40rem] lg:h-[60rem] w-full absolute meshmain dark:meshmain-dark rounded-2xl px-4"></div>

      {/* Main Hero + Navbar Section */}
      <div className="py-10 w-full flex flex-col gap-y-8 items-center relative z-50 px-4">
        
        <div className="px-6 py-4 bg-blue-100 dark:bg-[#111f32] rounded-xl shadow-md z-50 w-full max-w-5xl flex justify-between items-center text-slate-600 dark:text-slate-100">
          <div className="flex divide-x-2 divide-slate-300 dark:divide-[#939595] gap-x-4 items-center">
            <img src={logo} alt="" className="h-8" />
            <div className="flex gap-x-4 tracking-tight pl-4">
              {/* <a href="#">Home</a> */}
              <a href="#about">About</a>
              {/* <a href="#">Outreach</a> */}
            </div>
          </div>

          <div className="flex gap-x-2">
            <a
              href="#contact"
              className="px-6 py-2 bg-white rounded-md shadow-md transition300scale bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-blue-100 dark:from-blue-900 dark:to-blue-950"
            >
              Contact
            </a>
            <DarkModeToggle />
          </div>
        </div>

        {/* Hero Text Box */}
        <div className="flex flex-col gap-y-3 text-center text-blue-100">
          <h1 className="seven-title tracking-tighter">
            Helping Students and Advisors, <br />{" "}
            <span className="main-gradient">One Chat at a Time.</span>
          </h1>

          <h4 className="one-title max-w-xl mx-auto">
            We consolidate information on university resources to bridge the gap
            of opportunities for students and advisors.
          </h4>

          <div className="flex gap-x-4 w-full justify-center items-center text-base">
            <a
              href="#contact"
              className="px-6 py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-blue-100 dark:from-black dark:to-blue-950 shadow-lg rounded-lg text-slate-600 dark:text-slate-100 font-medium transition300scale"
            >
              Get Started
            </a>
            <a href="#contact">Book a Demo</a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl shadow-xl">
          <img src={ui_hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
