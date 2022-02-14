import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Menu from './page/Menu';
import About from './Component/About';
import Contact from './Component/Contact';


const Apps = () => {

    return (
        <div className='App'>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/menu'>
                    <Menu />
                </Route>

                <Route exact path='/about'>
                    <About />
                </Route>

                <Route exact path='/contact'>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}



export default Apps;