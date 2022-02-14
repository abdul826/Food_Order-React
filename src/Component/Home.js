import React from 'react';
import banner from '../assets/paneer.jpg';
import '../style/home.css';


const Home = () => {
    return (
        <>
        <div className='home'>
            <div className="hadderContainer">
                <h1 className='Corner'>Food Corner</h1>
                <h4>Indian Food</h4>
                <button className='button'>Explore</button>
            </div>
            
        </div>
    </>
    )
}

export default Home
// ' style={{backgroundImage: `url(${banner})`}}