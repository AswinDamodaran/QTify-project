import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Faq from './FAQ/faq'
import Hero from './Hero/Hero'
import Section from './Section/Section'
import axios from 'axios'
import Carousel from './Carousel/Carousel'
import style from '../main.module.css'
import { Button } from '@mui/material'
import Tabscomponent from '../components/Tabscomponent/TabsComponent'

function Main2() {

  const [topAlbums, setTopabums] = useState([])
  const[newAlbums,setNewalbums]=useState([])

  const [showSection,setShowsection]=useState(false)
  const [showSection2,setShowsection2]=useState(false)


  const fetchAlbums= async ()=>{
    try{
      const topa=await axios.get(`https://qtify-backend-labs.crio.do/albums/top`)
      const newa=await axios.get(`https://qtify-backend-labs.crio.do/albums/new`)
      setTopabums(topa.data)
      setNewalbums(newa.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleSection=()=>{
        setShowsection(!showSection)
  }


  const handleSection2=()=>{
    setShowsection(!showSection)
}


  useEffect(()=>{
    fetchAlbums()
  },[])


  return (
    <div className={style.main}>
        <Navbar/>
        <Hero/>
        <div className={style.title} >
        <div>

        </div>
        <div>
          <Button onClick={handleSection} sx={{ color: "#34C94B", fontWeight: "600", font: "Poppins" }} variant="text">{showSection ? "Collapse" : "show all"}</Button>
        </div>
      </div>
      {showSection? (<Section title="Top Albums" data={topAlbums}/>): (<Carousel title="Top Albums" data={topAlbums}/>)}
      <div className={style.title} >
        <div>

        </div>
        <div>
          <Button onClick={handleSection2} sx={{ color: "#34C94B", fontWeight: "600", font: "Poppins" }} variant="text">{showSection2 ? "Collapse" : "show all"}</Button>
        </div>
      </div>
      {showSection? (<Section title="New Albums" data={newAlbums}/>): (<Carousel title="Top Albums" data={newAlbums}/>)}
        
        <Tabscomponent />

        <Faq/>
    </div>
  )
}

export default Main2