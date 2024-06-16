import React from 'react';
import sample from '../assets/hero.png';
import { Link } from 'react-router-dom';

const HospitalCard = () => {
  return (
    <>
    <Link to='/hospital:id'>
    <div className="lg:flex item-center justify-between hover:scale-110 translate-x-2 duration-75 bg-light_grey shadow-md w-[30rem] px-3 py-2">
            <div className="lg:flex items-center lg:gap-5">
              <img
                src={sample}
                alt="Menu Image"
                className="w-[7rem] h-[7rem] object-cover"
              />
              <div className="space-y-1 pl-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{'ABC Hospital'}</p>
                <p>{'Excellent 😃'}</p>
                <span>123 reviews</span>
                <p>Greater Accra Region, Accra</p>
              </div>
            </div>
          </div>
    </Link>
    </>
  )
}

export default HospitalCard