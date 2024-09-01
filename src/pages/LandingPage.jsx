import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../css/LandingPage.css';
import ModelView from '../components/ModelView';
import { div } from 'three/webgpu';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

  useEffect(() => {
    gsap.fromTo(".subtitle", { opacity: 0, y: 30 }, { 
      scrollTrigger: { trigger: ".subtitle", scrub: true },
      opacity: 1, y: 0, duration: 1.5, stagger: 0.3 , ease: "power1.inOut"});
    gsap.fromTo(".ring-container", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 4,});
  }, []);

  return (

      <div className="main-container">
        <h1>Explore Our Proudect,
          <br />
          <span className='subtitle'>With a Closer look at A 3D Ring</span>
          </h1>
      <div className='LandingPage-container'>
        <div className='content'>
          <h2 className='subtitle'>A 3D Ring</h2>
          <p className='subtitle'>Take a look around...</p>
        </div>
        <div className="ring-container">
          <ModelView />
        </div>
      </div>
      </div>
    
  );
}

export default LandingPage;
