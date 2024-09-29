import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Faq from './components/FAQ/faq';
import Section from './components/Section/Section';
import styles from "./main.module.css"
import BasicTabs from './components/Tabscomponent/TabsComponent';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from './components/Carousel/Carousel';


const Main = () => {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [toggle, setToggle] = useState(false)
  const [toggle2,setToggle2]=useState(false)

  // getting data from the backend
  const getTop = async () => {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`)
    setTopAlbums(res.data)
    // console.log(res.data)
    return res.data
  }
  const getNew = async () => {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`)
    setNewAlbums(res.data)
    // console.log(res.data)
    return res.data
  }

  const handleToggle = () => {
    setToggle(!toggle)


  };
  const handleToggle2 = () => {
    setToggle2(!toggle2)


  };

  useEffect(() => {
    getTop()
    getNew()
  }, [])


  return (
    <div>
      <Navbar />
      <Hero />
      {toggle2 ? (
        <Section title={"New Albums"} topAlbums={newAlbums} toggle={toggle2} handleToggle={handleToggle2} />
      ) : (
        <Carousel title={"New Albums"} topAlbums={newAlbums} toggle={toggle2} handleToggle={handleToggle2} />
      )}
      {toggle ? (
        <Section title={"Top Albums"} topAlbums={topAlbums} toggle={toggle} handleToggle={handleToggle} />
      ) : (
        <Carousel title={"Top Albums"} topAlbums={topAlbums} toggle={toggle} handleToggle={handleToggle} />
      )}

    <BasicTabs/>

      <Faq />
    </div>
  )
}

export default Main