import React from 'react';
import '../style/contact.css';
import Pizzas from '../assets/pizza1.jpg';

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="image">
                    <img src={Pizzas} alt="" />
                </div>
                <div className="form">
                    <h1>Contact Me</h1>
                    <input type="text" placeholder='Enter Name' className='input' />

                    <input type="email" placeholder='Enter Email' className='input' />


                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="3" column='10'></textarea>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </div>
            </div>
        </>
    )
}

export default Contact
