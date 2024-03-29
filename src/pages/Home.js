import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import State from '../components/state';
import ClientLogo from '../components/ClientLogo';
import Testimotion from '../components/Testimotion';
import Slider from '../components/Slider';
import Welcome from '../components/Welcome';

export default function Home() {
  
    return(
        <div className='homecontainer'>
             <Header/>
             <Slider/>
             <Welcome/>
             <State/>
             <Testimotion/>
             <ClientLogo/>
             <Footer/>
             
        </div>
    );
}
