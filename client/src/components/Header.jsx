import React,{useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import {NavLink} from "react-router-dom";
const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
<AppBar sx= {{backgroundColor :"008080"}}position='sticky'>
    <Toolbar> 
    <Typography><LocalFloristIcon/></Typography>
    </Toolbar>
    <Tabs 
    sx={{ml: "auto"}}
    textColor = "inherit"
     indicatorColor = "secondary"
      value = {value} 
      onChange={(e,val)=> setvalue(val)}
    >
        <Tab LinkComponent={NavLink} to ="/add" label ='Add Bouquet'/>
        <Tab LinkComponent={NavLink} to ="/list"label = 'Bouquets'/>
        <Tab LinkComponent={NavLink} to ="/about"label = 'About Us'/>
    </Tabs>
</AppBar>
  </div>
  )
}

export default Header
