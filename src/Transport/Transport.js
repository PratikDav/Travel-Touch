import React from 'react';
import { useHistory } from 'react-router';
import './Transport.css';



const Transport = props => {
    
    const {type, picture} = props.singleData;
    
    const history = useHistory()
    const handleBooking = () =>{
        history.push('/booking')
    }
    return (
        <section >
            <div class="card" onClick={() => handleBooking()}  style={{width: '18rem',height: '10rem',marginTop: '80px',marginLeft: '60px', cursor: 'pointer'}}>
                <img style={{width: '200px', height: '100px'}} src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-text">{type}</h3>
                </div>
            </div>
        </section>
    );
};

export default Transport;