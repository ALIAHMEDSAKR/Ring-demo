import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../css/LandingPage.css';
import ModelView from '../components/ModelView';

const LandingPage = () => {

  useEffect(() => {
    gsap.fromTo(".subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, });
    gsap.fromTo(".ring-container", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 4,});
  }, []);

  return (
    <div className='main-container'>
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
