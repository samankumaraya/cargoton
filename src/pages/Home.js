import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import State from '../components/state';
import ClientLogo from '../components/ClientLogo';
import Testimotion from '../components/Testimotion';
import Slider from '../components/Slider';

export default function Home() {
  
    return(
        <div className='homecontainer'>
             <Header/>
             <Slider/>
             <State/>
             <Testimotion/>
             <ClientLogo/>
             <Footer/>
             
        </div>
    );
}
