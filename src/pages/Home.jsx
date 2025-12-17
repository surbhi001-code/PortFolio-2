import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import DesignerLife from '../components/DesignerLife'
import About from '../components/About'
import Beyoud9_to_5 from '../components/Beyoud9_to_5'
import Tools from '../components/Tools'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
      <Hero/>
      <DesignerLife/>
      <Project/>
      <About/>
      <Beyoud9_to_5/>
      <Tools/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Home
