import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import HomeBanner from '../HomeBanner/HomeBanner';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect( () => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    },[])
    return (
        <div className='container mx-auto'>
            <HomeBanner></HomeBanner>
            <h1 className="text-2xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-500 text-center">Our Masterminds</h1>
            <div className="grid justify-center mt-10 mb-20 items-center gap-x-5 gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                chefs.map(chef => <Chef key={chef._id} chef={chef}></Chef>)
                }
            </div>
            
        </div>
    );
};

export default Chefs;