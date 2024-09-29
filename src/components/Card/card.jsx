import React from "react";
import { Card, CardContent, CardActionArea, Typography, CardMedia, CardActions,Chip } from "@mui/material";
import styles from "./card.module.css"


export default function card(data) {
  // console.log("from card",data.album)
  return (
    <div className={styles.wrapper}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            className={styles.cardimage}
            component="img"
            height="140"
            image={data.album.image}
            alt="green iguana"
          />
           <div className={styles.chip}>
            <Chip label={`${data.album.follows} follows`}  sx={{bgcolor:"#121212",color:"#FFFFFF",m:1}} />
            </div>
          
   
    
        </CardActionArea>
      </Card>
      <div className={styles.title}>
      {data.album.title}
          </div>
    </div>

  )

}