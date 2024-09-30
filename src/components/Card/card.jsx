import React from "react";
import { Card, CardContent, CardActionArea, Typography, CardMedia, CardActions,Chip } from "@mui/material";
import styles from "./card.module.css"


export default function card({data}) {
  // console.log("from card",data.image)
  return (
    <div className={styles.wrapper}>
      <Card sx={{width: "auto",maxWidth:"159px"}}>
        <CardActionArea>
          <CardMedia
            className={styles.cardimage}
            component="img"
            height="140"
            image={data.image}
            alt="Album cover"
          />
           <div className={styles.chip}>
            <Chip label={`${data.follows} follows`}  sx={{bgcolor:"#121212",color:"#FFFFFF",m:1}} />
            </div>
          
    
        </CardActionArea>
      </Card>
      <div className={styles.title}   >
      {data.title}
          </div>
    </div>

  )

}