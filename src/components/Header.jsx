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
      <div className="border relative pt-[240px]">
        <img
          className="absolute z-10 left-2/4 top-[400px] transform -translate-x-2/4 -translate-y-2/4 opacity-40"
          src={bg}
          alt="background"
        />
        <img className="absolute right-24 top-48" src={obj1} alt="" />
        <img className="absolute right-44 top-56" src={obj2} alt="" />
        <img className="absolute left-60 top-48 z-[100]" src={obj3} alt="" />
        <img className="absolute left-24 bottom-2" src={obj4} alt="" />
        <img
          className="absolute left-[430px] top-[330px] z-[100]"
          src={obj5}
          alt=""
        />
        <img
          className="absolute right-96 bottom-32 z-[100]"
          src={obj6}
          alt=""
        />
        <img
          className="absolute right-14 bottom-16 z-[100]"
          src={obj7}
          alt=""
        />
        <h1 className=" relative z-50 text-center font-semibold leading-[108px] -tracking-[1px] font-lexend mx-auto text-[100px] text-white">
          Ain't <span className="bg-[#B341FF] px-3 rounded-full">Nobody</span>
          <br />
          Got time for{" "}
          <span
            className="bg-[#C2F929] text-black px-2 rounded-lg"
          >
            Boring
          </span>
          <br />
          <span className="text-yellow-500">Regular Money</span>
        </h1>
        <p className="text-center text-[22px] leading-6 mt-20 font-lexend font-normal text-white">
          Trade the Hottest Demo Taka Effortlessly
        </p>
      </div>
    );
};

export default Header;