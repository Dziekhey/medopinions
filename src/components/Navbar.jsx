import React from 'react';
import logo from '../assets/croppedlogo.png';
import { navigations } from '../data/Navlinks';

const Navbar = () => {
  return (
   <>
    <section className='h-20 bg-light_grey flex justify-content justify-between sticky'>
        <div className=''>
            <img src={logo} alt='MedOpinions' className='h-64 w-64 object-contain pb-40' />
        </div>
        <div className='flex items-center'>
            {
                navigations.map((navigation, index) => (
                    <div className='flex pt-3' key={index}>

                        <h1 className='px-10 font-semibold'>{navigation.title}</h1>
                    </div>
                ))
            }
        </div>
    </section>
   </>
  )
}

export default Navbar;