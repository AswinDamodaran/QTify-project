import React from 'react'
import styles from "./Section.module.css"
import Card from "../Card/card"
import Button from '@mui/material/Button';



function Section({ title, topAlbums }) {
  console.log(toggle)

  return (
    <div className={styles.main}>

      <div className={styles.showall}>
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
    <div>
    <Button
          sx={{ color: '#34C94B', textTransform: 'none', mr: 7 }}
          type="text"
        onClick={handleToggle}
        >
          <h3>Collapse</h3>
        </Button>
    </div>
      </div>

      <div className={styles.gridcontainer}>
        {topAlbums.map((item, index) => (
          <div className="grid-item" key={index}>
            <Card album={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section








{/* {visibleItems < data.length ? (
                <Swiper spaceBetween={40} slidesPerView={7} className={styles.swiper} allowTouchMove>
                    {data.map((album, index) => (
                        <SwiperSlide key={index} className={styles.swiperslide}>
                            {rendercomponent(album)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Grid container spacing={11}>
                    {data.map((album, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                        <div>{rendercomponent(album)}</div>
                            
                        </Grid>
                    ))}
                </Grid>
            )} */}