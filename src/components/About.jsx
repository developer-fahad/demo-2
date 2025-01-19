import React from 'react';
import card1Obj1 from '../assets/card1-obj1.png'
import card1Obj2 from '../assets/card1-obj2.png'
import card1Obj3 from '../assets/card1-obj3.png'
import card2Obj1 from '../assets/card2-obj1.png'
import card2Obj2 from '../assets/card2-obj2.png'
import card2Obj3 from '../assets/card2-obj3.png'
import card2Obj4 from '../assets/card2-obj4.png'

const About = () => {
    return (
      <div className="border mt-24 py-16">
        <div className="flex justify-between items-center gap-8">
          <div className="w-5/12  transform -rotate-12">
            <div className="w-5/6 relative p-5 rounded-lg bg-[#ADD753]">
              <img className='absolute -right-32 -top-32' src={card1Obj1} alt="" />
              <img className='absolute -right-12 top-40' src={card1Obj2} alt="" />
              <img className='absolute left-32 -top-8' src={card1Obj3} alt="" />
              <h2 className="mb-8 font-bold text-[26px] leading-8">
                What are
                <br /> <span className="font-normal">demo Taka?</span>
              </h2>
              <p className="w-2/3 font-light text-[14px] leading-[22px] text-[#191919]">
                Artificial intelligence (AI) is revolutionizing the creative
                industries, from graphic design and music composition to film
                editing and storytelling. Tools like generative AI are enabling
                artists and creators to push boundaries, automate repetitive
                tasks, and explore new artistic possibilities
              </p>
            </div>
          </div>
          <div className="w-7/12 relative  bg-[#B341FF] p-5 rounded-lg transform rotate-6">
            <img className='scale-90 absolute -right-16 -top-20' src={card2Obj1} alt="" />
            <img className='absolute -right-4 -top-48' src={card2Obj2} alt="" />
            <img className='absolute right-14 -bottom-20' src={card2Obj3} alt="" />
            <img className='absolute right-40 -top-8' src={card2Obj4} alt="" />
            <img className='scale-90 absolute right-56 -top-2' src={card2Obj4} alt="" />
            <img className='absolute right-14 -bottom-20' src={card2Obj4} alt="" />
            <h2 className="mb-8 font-bold text-[26px] leading-8 text-white">
              So, why are
              <br /> they so popular?
            </h2>
            <p className="w-2/3 font-light text-[14px] leading-[22px] text-white">
              Artificial intelligence (AI) is revolutionizing the creative
              industries, from graphic design and music composition to film
              editing and storytelling. Tools like generative AI are enabling
              artists and creators to push boundaries, automate repetitive
              tasks, and explore new artistic possibilities
            </p>
          </div>
        </div>
        <div>
          <div className="w-6/12 relative flex flex-col items-end rounded-lg p-5 mx-auto mt-16 bg-[#0FCDC8]">
            <p className="absolute -left-10 bottom-2 font-light text-[14px] leading-6 py-1 px-5 rounded-lg bg-yellow-500">
              Let me know if you’d like more tweaks!
            </p>
            <h2 className="mb-8 font-bold text-[26px] text-right leading-8">
              Should you <br /> try them out?
            </h2>
            <p className="w-2/3 text-right font-light text-[14px] leading-[22px] text-[#191919]">
              Artificial intelligence AI is revolutionizing the creative
              industries, from graphic design and music composition to film
              editing and storytelling. Tools like generative AI are enabling
              artists and creators to push boundaries, automate repetitive
              tasks, and explore new artistic possibilities
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;