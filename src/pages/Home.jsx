import React from 'react'
import {Header} from '../cmps/Header'
import {HeroSection} from '../cmps/HeroSection'
import { CardsList } from '../cmps/CardsList'
import {GetStart} from '../cmps/GetStart'
import {Footer} from '../cmps/Footer'

export function Home() {
    return (
        <div>
             <Header/>
             <HeroSection/>
             <CardsList/>
             <GetStart/>
             <Footer/>
        </div>
    )
}
