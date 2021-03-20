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
            <div class="card" onClick={() => handleBooking()}  style={{width: '18rem',height: '20rem',marginTop: '80px',marginLeft: '60px', cursor: 'pointer',backgroundColor:'#ffffff'}}>
                <img style={{width: '300px',padding:'20px', paddingLeft: '1px',paddingTop: '15px'}} src={picture} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 style={{textAlign: 'center', color: '#11430'}} class="card-text">{type}</h3>
                </div>
            </div>
        </section>
    );
};

export default Transport;