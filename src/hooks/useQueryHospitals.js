import React, { useEffect, useState } from 'react';

const useQueryHospitals = () => {
    const [hospitals, setHospitals] = useState();
    const [loading, setLoading] = useState(false);


useEffect(() => {

    const fetchHospitals = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/hospitals`);
            const data = await response.json();
            // console.log(data);
            setHospitals(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
        }

    fetchHospitals();
}, [])

  return {loading, hospitals}
}

export default useQueryHospitals;