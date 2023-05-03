import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect( () => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    },[])
    return (
        <div className='container mx-auto'>
            <div className="grid justify-center items-center gap-x-5 gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                chefs.map(chef => <Chef key={chef._id} chef={chef}></Chef>)
                }
            </div>
            
        </div>
    );
};

export default Chefs;