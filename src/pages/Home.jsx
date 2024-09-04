import React, { useEffect } from 'react'
import Features from '../components/Features'
import FeaturesCards from '../components/FeaturesCards'
import Tabs from '../components/Tabs'
import Cards from '../components/Cards'
import Benefits from '../components/Benefits'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import Cards2 from '../components/Cards2'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero/>
      <Features/>
      <FeaturesCards/>
      <Tabs/>
      <Cards/>
      <Cards2/>
      <Benefits/>
      <GetStarted/>
    </div>
  )
}

export default Home