import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import travelData from '../data/data.json'


const Array = () => {

    const [data, setData] = useState([]);
    console.log(data)
     useEffect(() => {
          setData(travelData);
     },[])


    return (
        <div>
            <div className="d-flex">
            {
            data.map(singleData => <Transport singleData={singleData}></Transport>)
            }
            </div>
            
        </div>
    );
};

export default Array;