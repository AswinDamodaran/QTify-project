// import React, { useEffect, useState } from 'react'
// import { useSwiper } from 'swiper/react'
// import { ReactComponent as Rightarrow } from "../../materials/Rightarrow.svg"

// function Rightnav() {
//   const swiper = useSwiper()
//   const [isEnd, setIsEnd] = useState(false)


//   useEffect(() => {
//     const handleSwiperUpdate = () => {
//       setIsEnd(swiper.isEnd);
//     };

//     swiper.on('slideChange', handleSwiperUpdate);
//     swiper.on('init', handleSwiperUpdate);

//     handleSwiperUpdate();

//     return () => {
//       swiper.off('slideChange', handleSwiperUpdate);
//       swiper.off('init', handleSwiperUpdate);
//     };
//   }, [swiper]);

//   return (
//     <div>
//       {!isEnd && <Rightarrow onClick={() => swiper.slideNext()} />}
//     </div>
//   )
// }

// export default Rightnav

import React, { useEffect } from 'react';
// import { ReactComponent as RightArrow } from '../../materials/RightArrow.svg'; 
import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import {ReactComponent as Rightnav} from "../../materials/Rightnav.svg"

const RightNav = ({ className }) => {

  const swiper=useSwiper();
  const [isEnd,setIsEnd]=useState(swiper.isEnd)

useEffect(()=>{
  swiper.on("slideChange",()=>{
    setIsEnd(swiper.isEnd)
  })
})

  return (
    <div className={className}>
      {!isEnd && <Rightnav onClick={()=> swiper.slideNext() } />}
    </div>
  );
};

export default RightNav;
