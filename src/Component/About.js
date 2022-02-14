import React from 'react';
import '../style/about.css';
import Pizza from '../assets/pizza.jpg';

const About = () => {
    return (
        <>
           <div className="about">
                <div className="images">
                   {/* <img src={Pizza} alt="" /> */}
                </div>
                
                <div className="content">
                    <h1>About</h1>
                    <div className="para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi consequuntur quia quis officiis eligendi, odio itaque commodi beatae eos laudantium ex quas possimus. Perspiciatis corrupti repudiandae sequi voluptatem possimus.
                    Atque expedita quasi nesciunt voluptates unde in nobis aliquam iste ipsum consequatur. Doloribus repellat neque at, numquam repudiandae doloremque sunt totam repellendus autem in est modi odit ullam molestias nobis.
                    Voluptate totam doloribus culpa voluptas est rerum voluptatum quisquam maxime, nihil autem accusamus qui placeat praesentium quae ea adipisci quos impedit illo laudantium cum ducimus.</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default About
