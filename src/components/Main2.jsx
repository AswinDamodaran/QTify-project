import React,{useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Faq from './FAQ/faq'
import Hero from './Hero/Hero'
import Section from './Section/Section'
import axios from 'axios'
import Carousel from './Carousel/Carousel'

function Main2() {

  const [topAlbums, setTopabums] = useState([])
  const[newAlbums,setNewalbums]=useState([])

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

  useEffect(()=>{
    fetchAlbums()
  },[])


  return (
    <div>
        <Navbar/>
        <Hero/>
        <Section title="Top Albums" data={topAlbums}/>
        <Section title="New Albums" data={newAlbums}/>
        <Carousel title="Top Albums" data={topAlbums}/>

        <Faq/>
    </div>
  )
}

export default Main2