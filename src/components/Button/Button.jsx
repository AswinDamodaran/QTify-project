import React from "react";
import { Button } from "@mui/material";


export default function button(){
    return (
        <div>
            <Button className="btn" sx={{color:"#34C94B",fontFamily:"Poppins"}} variant="contained">Give Feedback</Button>
        </div>
    )
}