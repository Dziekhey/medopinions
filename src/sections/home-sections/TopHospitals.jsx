import React from 'react'
import HospitalCard from '../../components/HospitalCard'

const TopHospitals = () => {
  return (
    <>
    <section className='p-10'>
        <div>
            <h1 className='custom_line relative font-semibold text-xl'>Here are some highly rated hospitals</h1>
        </div>
        <div className='pt-10 flex justify-center'>
            <HospitalCard />
        </div>
    </section>
    </>
  )
}

export default TopHospitals