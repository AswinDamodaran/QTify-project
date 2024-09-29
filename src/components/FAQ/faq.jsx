import React from 'react'
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./faq.module.css"


const faq = () => {
    return (
        <div className={styles.main}>
            <div className={styles.accordions}>
                <h1 >FAQs</h1>
                <Accordion className={styles.texts} sx={{ bgcolor: "#121212", color: "#FFFFFF", border: "1px solid #FFFFFF",mb:2,borderRadius:1 }} >
                    <AccordionSummary
                        
                        expandIcon={<ExpandMoreIcon sx={{color:"#34C94B"}}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Is QTify free to use?
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ bgcolor: "#FFFFFF", color: "#121212" }}>
                        Yes! It is 100% free, and has 0% ads!
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.texts} sx={{ bgcolor: "#121212", color: "#FFFFFF", border: "1px solid #FFFFFF",mb:2,borderRadius:1 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color:"#34C94B"}} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Can I download and listen to songs offline?
                    </AccordionSummary>
                    <AccordionDetails
                    sx={{ bgcolor: "#FFFFFF", color: "#121212" }}>
                        Sorry, unfortunately we don't provide the service to download any songs.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default faq