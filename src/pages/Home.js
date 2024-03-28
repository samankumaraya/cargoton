import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import State from '../components/state';
import ClientLogo from '../components/ClientLogo';

export default function Home() {
  
    return(
        <div className='homecontainer'>
             <Header/>
             <State/>
             <ClientLogo/>
             <Footer/>
             
        </div>
    );
}
