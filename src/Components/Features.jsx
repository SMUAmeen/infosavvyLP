import React from 'react'
import feature1 from '../assets/feature1.svg'
import feature2 from '../assets/feature2.svg'
import { PiChatCenteredDuotone } from "react-icons/pi";
import { PiCompassDuotone } from "react-icons/pi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { BsFillChatHeartFill } from "react-icons/bs";
import { FaChartColumn } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";

import featurespre1 from '../assets/featurespre1.svg'
import featurespre2 from '../assets/featurespre2.svg'

const Features = () => {
  return (
    <div className='font-outfit p-4 max-w-[120rem] mx-auto flex flex-col gap-y-10'>

        <div className='flex flex-col gap-y-10 items-center text-center max-w-[70rem] mx-auto w-full px-6'>
            <h4 className='six-title text-slate-700 dark:text-slate-50'>Nationally, there is a <span className="font-extrabold">375:1</span> <br />
                    student-to-advisor ratio.</h4>

            <div className='grid sm:grid-cols-2 gap-6 py-4 w-full md:divide-x-2 text-slate-500 dark:text-slate-50'>
                <div className='py-4 four-title space-y-4'>
                    <h3>Advisors are overbooked and overworked</h3>
                    <img src={featurespre1} alt="" className='w-full'/>  
                </div>
                <div className='py-4 four-title space-y-20 pl-6'>
                    <h3>...Leaving students underserved and confused</h3>
                    <img src={featurespre2} alt="" className='w-full'/>  
                </div>
            </div>
        </div>

        <div className='pt-20 pb-20 mx-auto meshmain dark:meshmain-dark rounded-xl px-12'>

            <div className='max-w-[80rem] mx-auto w-full flex flex-col gap-y-10 lg:gap-y-36'>

                <div className='text-center text-white four-title tracking-tight space-y-2'>
                    <div className='eight-title flex flex-col gap-x-4 justify-center'>
                        <div id="about">So We Built</div>
                        <div className='flex gap-x-2 items-center justify-center'><PiCompassDuotone className='w-14 h-14 lg:h-20 lg:w-20'/> <span className="main-gradient">Compass</span></div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-10 text-blue-100'>
                
                    <div className='flex items-center'>
                            <img src={feature1} alt="" className='w-full'/>
                    </div>
                    <div className='flex flex-col justify-center gap-y-4 w-full'>
                        <h2 className='six-title w-full mb-2'>
                            A Conversational <br /> <span className="main-gradient">AI Assistant</span>
                        </h2>
                        <div className='flex gap-x-4'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md h-max'>
                                <PiChatCenteredDuotone className='h-6 w-6'/>
                            </div>
                            <div className='flex flex-col gap-y-1 text-white'>
                                <h4 className='font-medium three-title'>
                                    Conversational
                                </h4>
                                <p className='text-lg'>
                                    Reduced the workload on academic advisors by enabling a generative AI assisstant that answers students' questions efficiently.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-x-4'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md h-max'>
                                <MdOutlineQuestionAnswer className='h-6 w-6'/>
                            </div>
                            <div className='flex flex-col gap-y-1 text-white'>
                                <h4 className='font-medium three-title'>
                                    Instant Answers
                                </h4>
                                <p className='text-lg'>
                                    Help students overcome information overload and decrease the time and friction to them getting the advice and information they need to be successful.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-10 text-blue-100'>
                    <div className='flex flex-col justify-center gap-y-4 w-full'>
                        <h2 className='six-title w-full mb-2 text-white'>
                            Personalized Course <br /> Data & Analysis
                        </h2>
                        <div className='flex gap-x-4'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md h-max'>
                                <FaAddressCard className='h-6 w-6'/>
                            </div>
                            <div className='flex flex-col gap-y-1 text-white'>
                                <h4 className='font-medium three-title'>
                                    Personalized
                                </h4>
                                <p className='text-lg'>
                                    Secure registration and login system for students and advisors which enables users to create and access personalized login accounts.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-x-4'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md h-max'>
                                <BsFillChatHeartFill className='h-6 w-6'/>
                            </div>
                            <div className='flex flex-col gap-y-1 text-white'>
                                <h4 className='font-medium three-title'>
                                    Recommendations
                                </h4>
                                <p className='text-lg'>
                                    Personalized course recommendations through catalog or campus events through campus platforms and based on user preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                            <img src={feature2} alt="" className='w-full'/>
                    </div>
                </div>

                <div className='flex flex-col gap-y-10 text-center max-w-[70rem] mx-auto'>
                    <h2 className='six-title tracking-tight text-white'>
                        And Plenty More!
                    </h2>
                    <div className='w-full grid md:grid-cols-3 gap-10 text-white'>

                        <div className='flex flex-col items-center space-y-2'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md w-max'>
                                <FaHandHoldingHeart className='h-6 w-6'/>
                            </div>
                            <h4 className='four-title'>
                                Impactful
                            </h4>
                            <p className=''>
                                Design to help universities increase their retention rate by improving the student experience through personalized academic advising.
                            </p>
                        </div>

                        <div className='flex flex-col items-center space-y-2'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md w-max'>
                                <FaChartColumn className='h-6 w-6'/>
                            </div>
                            <h4 className='four-title'>
                                Analytics
                            </h4>
                            <p className=''>
                                Display board for metrics and KPIs to showcase value to advisors and administration to provide them insights on the system's impact.
                            </p>
                        </div>

                        <div className='flex flex-col items-center space-y-2'>
                            <div className='p-2 rounded-md bg-blue-100 text-slate-600 shadow-md w-max'>
                                <FaMoneyBillTransfer className='h-6 w-6'/>
                            </div>
                            <h4 className='four-title'>
                                Simple Pricing
                            </h4>
                            <p className=''>
                                We offer a simple pricing model: We license to universities through a tiered pricing plan based on the number of students, size ofthe university, and complexity of the integrations.
                            </p>
                        </div>

                    </div>
                    <a href="#" className='w-max mx-auto px-6 py-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-blue-100 dark:from-black dark:to-blue-950 dark:text-slate-100 shadow-lg rounded-lg text-slate-600 font-medium transition300scale'>
                        Book a Demo
                    </a>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Features
