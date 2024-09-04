import { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../css/LandingPage.css';
import ModelView from '../components/ModelView';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

  useEffect(() => {
    const RingAnimtionTl = gsap.timeline();
    RingAnimtionTl.to(".ring-container", {
      scrollTrigger: {
        trigger: ".ring-container",
        scrub: 1,
        start: "top center",
        end: "bottom top",
        markers: true
      },
      yPercent: 400,
      xPercent: -300,
      ease: "power1.inOut",
      duration: 6,
      onUpdate: function () {
        const progress = this.progress();
        document.dispatchEvent(new CustomEvent('scrollRotation', { detail: progress }));
      },
      onComplete: () => {
        document.dispatchEvent(new Event('zoomAndPosition'));
        // Ensure the grid layout remains consistent after the animation
        gsap.to(".LandingPage-container", {
          gridTemplateColumns: "1fr 1fr",
          duration: 0.5,
          ease: "power1.inOut"
        });
      }
    });
  }, []);

  return (
    <div className="main-container">
      <h1>Explore Our Product,<br />
        <span className='subtitle'>With a Closer Look at a 3D Ring</span>
      </h1>
      <div className="LandingPage-container">
        <div className='content'>
          <h2 className='subtitle'>A 3D Ring</h2>
          <p className='subtitle'>Take a look around...</p>
        </div>
        <div className="ring-container">
          <ModelView />
        </div>
          <div className="new-field">
            <form>
              <label htmlFor="name">Enter Your Name</label>
              <fieldset>
                <input id="name" type="text" />
              </fieldset>
            </form>
          </div>
      </div>
    </div>
  );
}

export default LandingPage;
