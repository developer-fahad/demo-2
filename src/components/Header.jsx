import React from 'react';
import bg from '../assets/Main_1.png'
import obj1 from '../assets/header-obj1.png'
import obj2 from '../assets/header-obj2.png'
import obj3 from '../assets/header-obj3.png'
import obj4 from '../assets/header-obj4.png'
import obj5 from '../assets/header-obj5.png'
import obj6 from '../assets/header-obj6.png'
import obj7 from '../assets/header-obj7.png'

const Header = () => {
    return (
      <div className="relative pt-[240px]">
        <img
          className="absolute xl:scale-[1] md:scale-[0.9] scale-[0.5] z-10 xl:left-2/4 left-1/2 xl:top-[400px] top-[320px] transform -translate-x-2/4 -translate-y-2/4 opacity-40"
          src={bg}
          alt="background"
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.7] scale-[0.4] xl:right-24 md:right-4 -right-4 top-48"
          src={obj1}
          alt=""
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.7] scale-[0.4] xl:right-44 md:right-20 right-8 xl:top-56 top-52"
          src={obj2}
          alt=""
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.7] scale-[0.4] xl:left-60 md:left-20 top-48 z-[100]"
          src={obj3}
          alt=""
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.5] scale-[0.25] xl:left-24 md:left-0 -left-12 xl:bottom-2 bottom-12"
          src={obj4}
          alt=""
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.7] scale-[0.4] xl:left-[430px] md:left-[240px] left-24 xl:top-[330px] md:top-[300px] top-[260px] z-[100]"
          src={obj5}
          alt=""
        />
        <img
          className="absolute scale-[0.2] md:scale-[0.25] xl:scale-[0.3] xl:right-60 md:right-8 -right-12 xl:-bottom-8 -bottom-10 z-[100]"
          src={obj6}
          alt=""
        />
        <img
          className="absolute xl:scale-[1] md:scale-[0.5] scale-[0.3] xl:right-14 md:-right-9 -right-14 xl:bottom-16 bottom-10 z-[100]"
          src={obj7}
          alt=""
        />
        <h1 className=" relative z-50 text-center font-semibold xl:leading-[108px] md:leading-[82px] leading-[48px] -tracking-[1px] font-lexend mx-auto xl:text-[100px] md:text-[72px] text-[38px] text-white">
          Ain't <span className="bg-[#B341FF] px-3 rounded-full">Nobody</span>
          <br />
          Got time for{" "}
          <span className="bg-[#C2F929] text-black px-2 rounded-lg">
            Boring
          </span>
          <br />
          <span className="text-yellow-500">Regular Money</span>
        </h1>
        <p className="text-center xl:text-[22px] text-[16px] leading-6 mt-20 font-lexend font-normal text-white">
          Trade the Hottest Demo Taka Effortlessly
        </p>
      </div>
    );
};

export default Header;