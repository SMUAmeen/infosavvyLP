import React from "react";
import logo from '../assets/infosavvylogo2.png'

export default function Footer() {
    return (
        <div className="bg-blue-950 mx-auto font-outfit relative mt-20">


            <div className="py-40 bg-white dark:bg-[#171717] absolute w-full z-10">
                    
            </div>

            <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg relative z-30 border-2 border-blue-100 dark:border-slate-800">
  <h2 id="contact"className="five-title font-medium tracking-tighter text-black dark:text-white mb-6 text-center">
    Contact our Team
  </h2>
  
  <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-black dark:text-slate-300 mb-1">Full Name</label>
        <input 
          type="text" 
          className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Your Full Name" 
        />
      </div>
      
      <div>
        <label className="block text-black dark:text-slate-300 mb-1">Email Address</label>
        <input 
          type="email" 
          className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Your Email" 
        />
      </div>
      
      <div>
        <label className="block text-black dark:text-slate-300 mb-1">Phone Number</label>
        <input 
          type="tel" 
          className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Your Phone Number" 
        />
      </div>
      
      <div>
        <label className="block text-black dark:text-slate-300 mb-1">University/Organization</label>
        <input 
          type="text" 
          className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Your University or Organization" 
        />
      </div>
    </div>
    
    <div className="mt-6">
      <label className="block text-black dark:text-slate-300 mb-1">Message</label>
      <textarea 
        className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        rows="5" 
        placeholder="Your Message"
      ></textarea>
    </div>
    
    <button 
      type="submit" 
      className="text-white w-full mt-4 px-6 py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 to-blue-800 shadow-lg rounded-lg font-medium transition-transform transform hover:scale-105"
    >
      Send Message
    </button>
  </form>
</div>



            <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 text-white">
                <div class="border-t border-slate-900/5 py-10">
                    <div className="flex gap-x-4 w-full justify-center items-center">
                        <img src={logo} className="h-5" alt="" />
                        <h4 className="text-white tracking-tight font-medium one-title">
                            InfoSavvy
                        </h4>
                    </div>                    
                    <p class="mt-5 text-center text-sm leading-6">© 2025 InfoSavvy Inc. All rights reserved.</p>
                    <div className="text-xs text-center mt-4">Website Designed by <a href="https://thryvedesign.com" className="text-blue-300 underline" target="_blank">ThryveDesign</a></div>
                </div>
            </footer>


        </div>
    );
}
