import React, { useEffect } from 'react';

import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import {ReactComponent as LeftNav} from "../../materials/Leftnav.svg"

const Leftnav = ({ className }) => {

  const swiper=useSwiper();
  const [isBeginning,setIsBeginning]=useState(swiper.isBeginning)

useEffect(()=>{
  swiper.on("slideChange",()=>{
    setIsBeginning(swiper.isBeginning)
  })
})

  return (
    <div className={className}>
      {!isBeginning && <LeftNav onClick={()=> swiper.slidePrev() } />}
    </div>
  );
};

export default Leftnav;
