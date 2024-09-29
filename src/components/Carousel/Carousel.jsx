import React from 'react'
import styles from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Card from "../Card/card"
import Button from '@mui/material/Button';
import RightNav from './Rightnav';
import LeftNav from './Leftnav';

function Carousel({ title, topAlbums, toggle, handleToggle ,no}) {
  return (
    <div className={styles.wrapper}>
{no ?(<div></div> ):
(      <div className={styles.showall}>
  <div className={styles.title}>
    <h3>{title}</h3>
  </div>
  <div>
    <Button
      sx={{ color: '#34C94B', textTransform: 'none', mr: 7 }}
      type="text"
      onClick={handleToggle}
    >
      <h3>{toggle ? `Collapse` : `Show All`}</h3>
    </Button>
  </div>
</div>)}

      <div className={styles.swiper}>

        <Swiper
          modules={[Navigation]}
          initialSlide={0}
          slidesPerView={"auto"}
          spaceBetween={20}
          allowTouchMove
        >'
            <LeftNav className={styles.leftnav} />


            {topAlbums.map((album, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <Card album={album}  />
              </SwiperSlide>
            ))}
            <RightNav className={styles.rightnav} />

        </Swiper>

      </div>
      <div className={styles.line}>
            
      </div>
    </div>
  )
}

export default Carousel