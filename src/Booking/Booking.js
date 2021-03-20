import React, { useEffect, useState } from 'react';
import travelData from '../data/data.json'
import GoogleMaps from '../GoogleMaps/GoogleMaps';

const Booking = () => {
    
    const [data, setData] = useState([]);


    const [booking, setBooking] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
    }




    useEffect(() => {
        setData(travelData)
    },[]);

    

    return (
        <div className='row' style={{margin:'50px'}}>
            <div className="col-lg-4 col-md-6 col-sm-12">
            {
                booking ?   <div>
                                {
                                    data.map(singleData => <div>
                                        <img style={{width:'100px'}} src={singleData.picture} alt=""/>
                                        <p>{singleData.type}</p>
                                    </div> )
                                }
                            </div> 
                            
                            
                        :  <div>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="form-1">Pick From</label>
                                    <br/>
                                    <input type="text" name="from-1" placeholder="Chawkbazar" required/>
                                    <br/>
                                    <label htmlFor="form-2">Pick To</label>
                                    <br/>
                                    <input type="text" name="form-2" placeholder="Muradpur" required/>
                                    <br/>
                                    <label>From</label><br/>
                                    <input type="date" name="" required/><br/>
                                    <label>To</label><br/>
                                    <input type="date" name="" required/>
                                    <br/>
                                    <br/>
                                    <input type="submit" onClick={()=> setBooking(!booking)} value="Search"/>
                                </form>
                                
                           </div>
                               
            }
            </div>
           
            <div className="col-lg-8 col-md-6 col-sm-12">
                 <h1>Google Maps</h1>
                 <GoogleMaps/>
            </div>
        </div>
    );
};

export default Booking;