import React from 'react'

const Stats = () => {
  return (
    <div className='font-outfit mb-20'>

        <div className='max-w-[90rem] mx-auto text-center flex flex-col'>
            <h4 className='one-title text-slate-700 dark:text-slate-100 opacity-80'>
                Our long term goals:
            </h4>
            <div className='w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-8 opacity-80 text-slate-600 dark:text-white'>

                <div className="py-4 flex flex-col items-center justify-center">
                    <h3 className='seven-title font-medium tracking-tight'>
                        100%
                    </h3>
                    <h4 className=''>
                        Student Approval
                    </h4>
                </div>

                <div className="py-4 flex flex-col items-center justify-center">
                    <h3 className='seven-title font-medium tracking-tight'>
                        13000+
                    </h3>
                    <h4 className=''>
                        Hours Saved by Advisors
                    </h4>
                </div>

                <div className="py-4 flex flex-col items-center justify-center">
                    <h3 className='seven-title font-medium tracking-tight'>
                        $1.25M
                    </h3>
                    <h4 className=''>
                        Saved Through Retention
                    </h4>
                </div>

                <div className="py-4 flex flex-col items-center justify-center">
                    <h3 className='seven-title font-medium tracking-tight'>
                        95%
                    </h3>
                    <h4 className=''>
                        Advisor Satisfaction
                    </h4>
                </div>
                
            </div>
            
        </div>


    </div>
  )
}

export default Stats