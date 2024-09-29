import React, { useEffect } from 'react';
// import { ReactComponent as RightArrow } from '../../materials/RightArrow.svg'; 
import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import {ReactComponent as Rightnav} from "../../materials/Rightnav.svg"
import  rightnav from "../../materials/Rightnav.svg"

const RightNav = ({ className }) => {

//   const swiper=useSwiper();
//   const [isEnd,setIsEnd]=useState(swiper.isEnd)

// useEffect(()=>{
//   swiper.on("slideChange",()=>{
//     setIsEnd(swiper.isEnd)
//   })
// })
return  <img src={rightnav} />;

  // return (
  //   <div className={className}>
  //     {!isEnd && <Rightnav onClick={()=> swiper.slideNext() } />}
  //   </div>
  // );
};

export default RightNav;
