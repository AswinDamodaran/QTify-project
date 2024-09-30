// import React from 'react'
// import styles from "./Section.module.css"
// import Card from "../Card/card"
// import Button from '@mui/material/Button';



// function Section({ title, topAlbums,toggle, handleToggle }) {
//   console.log(toggle)

//   return (
//     <div className={styles.main}>

//       <div className={styles.showall}>
//         <div className={styles.title}>
//             <h3>{title}</h3>
//         </div>
//     <div>
//     <Button
//           sx={{ color: '#34C94B', textTransform: 'none', mr: 7 }}
//           type="text"
//         onClick={handleToggle}
//         >
//           <h3>Collapse</h3>
//         </Button>
//     </div>
//       </div>

//       <div className={styles.gridcontainer}>
//         {topAlbums.map((item, index) => (
//           <div className="grid-item" key={index}>
//             <Card album={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Section



import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from './Section.module.css'
import axios from 'axios'
import Card from "../Card/card"

function Section() {

  const [topAlbums, setTopabums] = useState([])

  const fetchTop = async () => {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`)
      setTopabums(res.data)
      console.log(res.data)

    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTop()
  }, [])


  return (
    <div className={style.main} >
      <div className={style.title} >
        <div>
          Top Albums
        </div>
        <div>
          <Button sx={{ color: "#34C94B", fontWeight: "600", font: "Poppins" }} variant="text">Collapse</Button>
        </div>
      </div>


      <div className={style.gridcontainer}>
        {topAlbums.map((album, idx) => (
          <div key={idx}>
            <Card data={album} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Section







