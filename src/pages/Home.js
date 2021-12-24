import React from 'react'
import Activities from '../components/Activities'
import Footer from '../components/Footer'
import Header from '../components/Header'
import IntroBody from '../components/IntroBody'
import Places from '../components/Places'


function Home() {
    return (
        <div>
            <Header/>
            <IntroBody/>
            <Places/>

           

            <Activities/>
            <Footer/>
            
        </div>
    )
}

export default Home
