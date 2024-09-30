// import React,{useRef,useState} from 'react'
// import styles from './Carousel.module.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import 'swiper/css/navigation';
// import { Navigation, Pagination } from 'swiper/modules';
// import Card from "../Card/card"
// import Button from '@mui/material/Button';
// import RightNav from './Rightnav';
// import LeftNav from './Leftnav';


// function Carousel({ title, data,no}) {

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false); 
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className={styles.wrapper}>
// {!no && (
//   <div className={styles.showall}>
//     <div className={styles.title}>
//       <h3>{title}</h3>
//     </div>
//     <div>
//       <Button
//         sx={{ color: '#34C94B', textTransform: 'none', mr: 7 }}
//         type="text"
//         // onClick={handleToggle}
//       >
//         <h3>show all</h3>
//       </Button>
//     </div>
//   </div>
// )}

//       <div className={styles.swiper}>

//         <Swiper
//           modules={[Navigation]}
//           initialSlide={0}
//           slidesPerView={"auto"}
//           spaceBetween={50}
//           allowTouchMove


//           onSlideChange={(swiper) => {

//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}





//           navigation={{
//             prevEl: prevRef.current,
//           nextEl: nextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//         >'



//             {data.map((album, index) => (
//               <SwiperSlide key={index} style={{ width: 'auto' }}>
//                 <Card data={album}  />
//               </SwiperSlide>
//             ))}

//         </Swiper>
//         <div ref={prevRef} className={styles.leftnav} style={{ visibility: isBeginning ? 'hidden' : 'visible' }}>
//             <LeftNav />
//           </div>
//           <div ref={nextRef} className={styles.rightnav} style={{ visibility: isEnd ? 'hidden' : 'visible' }}>
//             <RightNav />
//           </div>

//       </div>

//     </div>
//   )
// }

// export default Carousel


import React from 'react'
import styles from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import Card from "../Card/card"

function Carousel({ data }) {
  return (
    <div className={styles.wrapper}>
      <div  className={styles.swiper}>
        <Swiper
          modules={[Navigation]}
          initialSlide={0}
          navigation
          slidesPerView={"auto"}
          spaceBetween={40}
          allowTouchMove
          direction="horizontal"
        >
          {data.map((album, idx) => (
            <SwiperSlide key={idx} className={styles.swiperslide} >
              <Card data={album} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel