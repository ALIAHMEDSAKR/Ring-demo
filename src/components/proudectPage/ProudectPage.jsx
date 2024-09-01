import React from 'react'
import { useEffect } from 'react';
import './productPage.css'
import gsap from 'gsap';
import ringImg from '../../assets/RingImgTest.jpeg' ;
import star from '../../assets/icons/star_icon.png';
import stardull from '../../assets/icons/star_dull_icon.png';

const ProudectPage = () => {

    useEffect(() => {
        gsap.fromTo("#anim", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 });
    })


  return (
    <div className='proudectDisplay'>
        <div className="LHS">
            <div className="proudectImg">
                 <img id='anim' src={ringImg} width={130} height={130} alt="" />
                 <img id='anim' src={ringImg} width={130} height={130} alt="" />
                 <img id='anim' src={ringImg} width={130} height={130} alt="" />
                 <img id='anim' src={ringImg} width={130} height={130} alt="" />
            </div>
            <div className="displayImg">
                <img className='img-main' width={300} height={300} src={ringImg} alt="" />
            </div>
        </div>
        <div className="RHS">
            <h1>Proudect Name</h1>
            <div className="rate">
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={stardull} alt="" />
                 <p>
                   (110 reviews) 
                 </p>
            </div>
            <div className="prices">
                <p>$100</p>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iste, praesentium eos quaerat quisquam consequuntur esse corrupti sit, vel soluta voluptatum nostrum sunt magnam error reiciendis animi atque quod perferendis, totam nobis sint ipsam! Reiciendis, quis quibusdam? Doloremque incidunt accusamus ipsam voluptas officiis saepe, vero eveniet voluptatum molestias ex deserunt?</p>
            </div>
            <div className="size">
                <h2>select Sizes</h2>
                <div className="sizes-container">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                </div>
            </div>
            <button>
                Add to cart
            </button>
            <p className='category'>
                <span>Category: </span>
                Ring
            </p>
        </div>
    </div>
  )
}

export default ProudectPage
