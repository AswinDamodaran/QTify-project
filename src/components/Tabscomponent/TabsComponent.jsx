import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/Carousel';
import styles from "./BasicTabs.module.css"
import PropTypes from 'prop-types';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function TabsComponent() {
  const [value, setValue] = useState(0)
  const [data, setData] = useState([])
  const [fileterData, setFilterData] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    if (newValue == 0) {
      setFilterData(data)
    }
    if (newValue == 1) {
      const newArr = data.filter(item => item.genre.key === 'rock')
      setFilterData(newArr)
    }
    if (newValue == 2) {
      const newArr = data.filter(item => item.genre.key === 'pop')
      setFilterData(newArr)

    }
    if (newValue == 3) {
      const newArr = data.filter(item => item.genre.key === 'jazz')
      setFilterData(newArr)
    }
    if (newValue == 4) {
      const newArr = data.filter(item => item.genre.key === 'blues')
      setFilterData(newArr)
    }


  }

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/songs`)
      setData(res.data)
      setFilterData(res.data)
      console.log(res.data)
    }
    catch (e) {
      alert(`error`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.main}>
                   <div className={styles.line}>
            
            </div>
      <div className={styles.title}>
        <div>
        <h3>Songs</h3>
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            TabIndicatorProps={{
              style: {
                backgroundColor: '#34C94B', fontWeight: 600
              },
            }}
            // indicatorColor="#34C94B"
            value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ color: "#ffffff" }} label="All" {...a11yProps(0)} />
            <Tab sx={{ color: "#ffffff" }} label="Rock" {...a11yProps(1)} />
            <Tab sx={{ color: "#ffffff" }} label="Pop" {...a11yProps(2)} />
            <Tab sx={{ color: "#ffffff" }} label="Jazz" {...a11yProps(3)} />
            <Tab sx={{ color: "#ffffff" }} label="Blues" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Carousel title="Songs" topAlbums={fileterData} no />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Carousel title="Rock" topAlbums={fileterData} no />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Carousel title="Pop" topAlbums={fileterData} no />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Carousel title="Jazz" topAlbums={fileterData} no />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Carousel title="Blues" topAlbums={fileterData} no />
        </CustomTabPanel>
      </Box>
    </div>

  );
}

export default TabsComponent;



